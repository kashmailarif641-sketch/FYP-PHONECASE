document.addEventListener("DOMContentLoaded", () => {

  const ordersContainer = document.getElementById("ordersContainer");

  let vendorsList = []; // store vendors globally

  // ================================
  // LOAD APPROVED VENDORS
  // ================================
  async function loadVendors() {
    try {
      const res = await fetch("http://localhost:5000/api/vendor/vendors");
      vendorsList = await res.json();
    } catch (error) {
      console.error("Error loading vendors:", error);
    }
  }

  // ================================
  // LOAD ORDERS
  // ================================
  async function loadOrders() {
    try {
      const response = await fetch("http://localhost:5000/api/orders");
      const orders = await response.json();

      ordersContainer.innerHTML = "";

      orders.forEach(order => {

        const card = document.createElement("div");
        card.classList.add("order-card");

        // Vendor Dropdown Options
        let vendorOptions = `<option value="">Unassigned</option>`;

        vendorsList.forEach(vendor => {
          vendorOptions += `
            <option value="${vendor._id}"
              ${order.assignedVendor && order.assignedVendor._id === vendor._id ? "selected" : ""}>
              ${vendor.name}
            </option>
          `;
        });

        card.innerHTML = `
          <div class="card-top">
            <img src="${order.designImage}" class="order-img">
            <div class="order-info">
              <h4>${order.orderId}</h4>
              <p><strong>User:</strong> ${order.userId ? order.userId.name : "N/A"}</p>
              <p><strong>Phone:</strong> ${order.phone}</p>
              <p><strong>Address:</strong> ${order.address}</p>
              <p><strong>Model:</strong> ${order.brand} ${order.model}</p>
              <p><strong>Material:</strong> ${order.material}</p>
              <p><strong>Amount:</strong> Rs ${order.totalPrice}</p>
            </div>
          </div>

          <div class="card-footer">

            <div class="status-group">
              <label>Order Status</label>
              <select class="status-select" data-id="${order._id}">
                <option value="Pending" ${order.orderStatus === "Pending" ? "selected" : ""}>Pending</option>
                <option value="Processing" ${order.orderStatus === "Processing" ? "selected" : ""}>Processing</option>
                <option value="Shipped" ${order.orderStatus === "Shipped" ? "selected" : ""}>Shipped</option>
                <option value="Delivered" ${order.orderStatus === "Delivered" ? "selected" : ""}>Delivered</option>
                <option value="Cancelled" ${order.orderStatus === "Cancelled" ? "selected" : ""}>Cancelled</option>
              </select>
            </div>

            <div class="vendor-group">
              <label>Assign Vendor</label>
              <select class="vendor-select" data-id="${order._id}">
                ${vendorOptions}
              </select>
            </div>

            ${order.orderStatus === "Completed" ? `
              <div class="payout-group">
                <button class="btn payout-btn" onclick="initiatePayout('${order._id}', '${order.assignedVendor?._id || ''}', ${order.totalPrice})">
                   Initiate Payout
                </button>
              </div>
            ` : ""}

          </div>
        `;

        ordersContainer.appendChild(card);
      });

    } catch (error) {
      console.error("Error loading orders:", error);
    }
  }

  // ================================
  // STATUS UPDATE
  // ================================
  document.addEventListener("change", async (e) => {

    // Status change
    if (e.target.classList.contains("status-select")) {

      const orderId = e.target.dataset.id;
      const newStatus = e.target.value;

      try {
        const response = await fetch(`http://localhost:5000/api/orders/${orderId}/status`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus })
        });

        if (response.ok) {
          alert("Status updated successfully!");
          loadOrders();
        } else {
          alert("Failed to update status");
        }

      } catch (err) {
        console.error("Error updating status:", err);
      }
    }

    // Vendor assign change
    if (e.target.classList.contains("vendor-select")) {

      const orderId = e.target.dataset.id;
      const vendorId = e.target.value;

      try {
        const response = await fetch(`http://localhost:5000/api/orders/${orderId}/assign`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ vendorId })
        });

        if (response.ok) {
          alert("Vendor assigned successfully!");
          loadOrders();
        } else {
          alert("Vendor assignment failed");
        }

      } catch (err) {
        console.error("Error assigning vendor:", err);
      }
    }

  });

  // ================================
  // INITIAL LOAD
  // ================================
  async function init() {
    await loadVendors();
    await loadOrders();
  }

  init();

});

// ================================
// INITIATE PAYOUT
// ================================
async function initiatePayout(orderId, vendorId, totalAmount) {
  if (!vendorId) {
    alert("No vendor assigned to this order.");
    return;
  }

  const method = prompt("Enter Payment Method (e.g. JazzCash, Bank Transfer):", "JazzCash");
  if (!method) return;

  const reference = prompt("Enter Transaction Reference / Internal Note:", "N/A");
  if (reference === null) return;

  try {
    const response = await fetch("http://localhost:5000/api/payouts/initiate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vendorId,
        orderId,
        totalAmount,
        paymentMethod: method,
        reference
      })
    });

    const data = await response.json();
    if (response.ok) {
      alert("Payout initiated successfully! Payout ID: " + data.payout.payoutId);
    } else {
      alert("Error: " + data.message);
    }
  } catch (error) {
    console.error("Payout initiation error:", error);
    alert("Server error occurred.");
  }
}