document.addEventListener("DOMContentLoaded", function () {

  const tableBody = document.querySelector("tbody");
  const totalEarningsEl = document.getElementById("totalEarnings");
  const pendingEl = document.getElementById("pendingPayments");
  const confirmedEl = document.getElementById("confirmedPayments");

  // Dummy Data (Later replace with backend API)
  let payments = [
    {
      id: "P-101",
      orderId: "101",
      user: "John Doe",
      amount: 1500,
      method: "Bank Transfer",
      date: "2026-02-10",
      status: "Payment Sent"
    },
    {
      id: "P-102",
      orderId: "102",
      user: "Ali Khan",
      amount: 2000,
      method: "JazzCash",
      date: "2026-02-11",
      status: "Confirmed"
    }
  ];

  function renderTable() {
    tableBody.innerHTML = "";

    let totalEarnings = 0;
    let pending = 0;
    let confirmed = 0;

    payments.forEach((payment, index) => {

      if (payment.status === "Confirmed") {
        totalEarnings += payment.amount;
        confirmed++;
      }

      if (payment.status === "Payment Sent") {
        pending++;
      }

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${payment.id}</td>
        <td>${payment.orderId}</td>
        <td>${payment.user}</td>
        <td>Rs. ${payment.amount}</td>
        <td>${payment.method}</td>
        <td>${payment.date}</td>
        <td>
          <span class="status ${payment.status === "Confirmed" ? "confirmed" : "payment-sent"}">
            ${payment.status}
          </span>
        </td>
        <td>
          ${payment.status === "Payment Sent"
            ? `<button class="confirm-btn" onclick="confirmPayment(${index})">Confirm</button>`
            : `<button class="confirm-btn" disabled>Confirmed</button>`
          }
        </td>
      `;

      tableBody.appendChild(row);
    });

    totalEarningsEl.textContent = "Rs. " + totalEarnings;
    pendingEl.textContent = pending;
    confirmedEl.textContent = confirmed;
  }

  window.confirmPayment = function (index) {
    payments[index].status = "Confirmed";
    payments[index].date = new Date().toISOString().split("T")[0];
    renderTable();
  };

  renderTable();

});
