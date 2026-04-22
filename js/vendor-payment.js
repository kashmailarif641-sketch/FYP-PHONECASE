document.addEventListener("DOMContentLoaded", async function () {

  const tableBody = document.querySelector("tbody");
  const totalEarningsEl = document.getElementById("totalEarnings");
  const pendingEl = document.getElementById("pendingPayments");
  const confirmedEl = document.getElementById("confirmedPayments");

  const userData = JSON.parse(localStorage.getItem("user"));
  if (!userData || userData.role !== "vendor") {
    window.location.href = "../../login.html";
    return;
  }

  async function loadPayments() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/payouts/vendor/${userData.id || userData._id}`
      );

      const payouts = await response.json();
      renderTable(payouts);

    } catch (error) {
      console.error("Error loading payments:", error);
    }
  }

  function renderTable(payouts) {
    if (!tableBody) return;
    tableBody.innerHTML = "";

    let totalEarnings = 0;
    let pending = 0;
    let confirmed = 0;

    if (!Array.isArray(payouts) || payouts.length === 0) {
      tableBody.innerHTML =
        `<tr><td colspan="9" style="text-align:center;">No payment records found.</td></tr>`;

      totalEarningsEl.textContent = "Rs. 0";
      pendingEl.textContent = "0";
      confirmedEl.textContent = "0";
      return;
    }

    payouts.forEach((payout) => {

      if (payout.status === "Paid") {
        totalEarnings += payout.vendorPayable;
        confirmed++;
      } else {
        pending++;
      }

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${payout.payoutId}</td>
        <td>${payout.order?.orderId || "N/A"}</td>
        <td>Rs ${payout.totalAmount}</td>
        <td>${payout.commissionPercent}% (Rs ${payout.commissionAmount})</td>
        <td><strong>Rs ${payout.vendorPayable}</strong></td>
        <td>${payout.paymentMethod || "N/A"}</td>
        <td>${payout.reference || "N/A"}</td>
        <td>${new Date(payout.createdAt).toLocaleDateString()}</td>
        <td>
          <span class="status ${payout.status.toLowerCase()}">
            ${payout.status}
          </span>
        </td>
        <td>
          ${payout.status === "Pending"
          ? `<button class="confirm-btn" onclick="confirmPayment('${payout._id}')">Confirm Received</button>`
          : `<button class="confirm-btn" disabled>Received ✓</button>`
        }
        </td>
      `;

      tableBody.appendChild(row);
    });

    totalEarningsEl.textContent = "Rs. " + totalEarnings;
    pendingEl.textContent = pending;
    confirmedEl.textContent = confirmed;
  }

  window.confirmPayment = async function (payoutId) {

    if (!confirm("Are you sure you have received this payment?"))
      return;

    try {

      const response = await fetch(
        `http://localhost:5000/api/payouts/vendor-confirm/${payoutId}`,
        { method: "PUT" }
      );

      if (response.ok) {
        alert("Payment confirmed successfully!");
        loadPayments();
      } else {
        alert("Failed to confirm payment.");
      }

    } catch (error) {
      console.error("Error confirming payment:", error);
    }
  };

  loadPayments();

});