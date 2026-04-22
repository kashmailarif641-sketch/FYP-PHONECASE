document.addEventListener("DOMContentLoaded", () => {

  const userData = JSON.parse(localStorage.getItem("user"));

  if (!userData || userData.role !== "vendor") {
    window.location.href = "../../login.html";
    return;
  }

  loadOrders();

  // 🔥 Filter change
  document.getElementById("statusFilter")
    .addEventListener("change", loadOrders);

  // 🔥 Search input
  document.getElementById("searchInput")
    .addEventListener("input", loadOrders);

});

async function loadOrders() {

  const userData = JSON.parse(localStorage.getItem("user"));
  const vendorId = userData.id || userData._id; // Supporting both for safety

  const status = document.getElementById("statusFilter").value;
  const search = document.getElementById("searchInput").value;

  try {

    const response = await fetch(
      `http://localhost:5000/api/orders/vendor/assigned/${vendorId}?status=${status}&search=${search}`
    );

    const orders = await response.json();

    const container = document.getElementById("orders-container");
    if (!container) return;

    container.innerHTML = "";

    if (!Array.isArray(orders) || orders.length === 0) {
      container.innerHTML = "<div class='no-orders'><p>No assigned orders found.</p></div>";
      return;
    }

    orders.forEach(order => {
      const card = document.createElement("div");
      card.className = "order-card";

      // Determine Payment Badge Class
      let payBadgeClass = "pending";
      if (order.payment?.status === "paid" || order.paymentStatus === "Verified") payBadgeClass = "success";
      if (order.payment?.mode === "COD") payBadgeClass = "cod";

      card.innerHTML = `
        <div class="card-header">
          <h3>#${order.orderId || order._id.slice(-6)}</h3>
          <span class="status-badge ${order.orderStatus.toLowerCase()}">${order.orderStatus}</span>
        </div>

        <div class="card-body">
          <div class="info-row">
            <span><strong>Customer:</strong> ${order.fullName}</span>
            <span><strong>Phone:</strong> ${order.phone}</span>
          </div>
          <div class="info-row">
            <span><strong>Address:</strong> ${order.address}</span>
          </div>
          <hr>
          <div class="info-row">
            <span><strong>Model:</strong> ${order.brand} ${order.model}</span>
            <span><strong>Material:</strong> ${order.material}</span>
          </div>
          <div class="info-row">
            <span><strong>Amount:</strong> Rs ${order.totalPrice}</span>
            <span><strong>Payment:</strong> <span class="pay-badge ${payBadgeClass}">${order.payment?.mode || "N/A"} (${order.payment?.status || order.paymentStatus})</span></span>
          </div>
          
          ${order.designImage ? `
            <div class="design-preview">
               <img src="${order.designImage}" alt="Design Image" onclick="openModal('${order.designImage}')">
            </div>
          ` : ""}
        </div>

        <div class="card-footer">
          <div class="status-update">
            <label>Update Status:</label>
            <select class="status-select" onchange="updateStatus('${order._id}', this.value)">
              <option value="Pending" ${order.orderStatus === "Pending" ? "selected" : ""}>Pending</option>
              <option value="Processing" ${order.orderStatus === "Processing" ? "selected" : ""}>Processing</option>
              <option value="Completed" ${order.orderStatus === "Completed" ? "selected" : ""}>Completed</option>
              <option value="Shipped" ${order.orderStatus === "Shipped" ? "selected" : ""}>Shipped</option>
              <option value="Delivered" ${order.orderStatus === "Delivered" ? "selected" : ""}>Delivered</option>
            </select>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading assigned orders:", error);
    const container = document.getElementById("orders-container");
    if (container) container.innerHTML = "<p>Error loading orders.</p>";
  }
}

async function updateStatus(orderId, newStatus) {
  try {
    const response = await fetch(
      `http://localhost:5000/api/orders/vendor/update-status/${orderId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderStatus: newStatus })
      }
    );

    if (response.ok) {
      alert("Order status updated to " + newStatus);
      loadOrders(); // Refresh without full reload for better UX
    } else {
      alert("Failed to update status");
    }
  } catch (error) {
    console.error("Update Status Error:", error);
    alert("Error updating status");
  }
}

// Modal Logic
function openModal(imgSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  if (modal && modalImg) {
    modal.style.display = "block";
    modalImg.src = imgSrc;
  }
}

const closeModal = document.querySelector(".close-modal");
if (closeModal) {
  closeModal.onclick = function () {
    const modal = document.getElementById("imageModal");
    if (modal) modal.style.display = "none";
  }
}
