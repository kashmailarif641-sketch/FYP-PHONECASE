document.addEventListener("DOMContentLoaded", async () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = localStorage.getItem("userId") || (user && user._id);

  if (!userId) {
    alert("User session not found. Please log in again.");
    return;
  }

  const response = await fetch(
    `http://localhost:5000/api/orders/user/${userId}`
  );

  const orders = await response.json();
  console.log("User Orders:", orders);

  const container = document.getElementById("orders-list");
  container.innerHTML = "";

  if (orders.length === 0) {
    container.innerHTML = "<p>No orders found</p>";
    return;
  }

  orders.forEach(order => {
    const status = order.payment?.status || "pending";
    const paymentMode = order.payment?.mode || "N/A";
    const shortId = order._id.slice(-6).toUpperCase();

    container.innerHTML += `
      <div class="order-card" id="order-${order._id}">
        
        <div class="order-content">
          <div class="order-left">
            <img src="${order.designImage || '../../images/default-case.png'}" class="order-image"/>
          </div>

          <div class="order-middle">
            <h3>${order.model} Case</h3>
            <p><strong>Order ID:</strong> ${shortId}</p>
            <p><strong>Date:</strong> ${new Date(order.createdAt).toLocaleString()}</p>
            <p><strong>Total:</strong> Rs. ${order.totalPrice || 1500}</p>
            <p><strong>Payment:</strong> <span style="text-transform: uppercase;">${paymentMode}</span></p>
            <p><strong>Payment Status:</strong> 
              <span class="payment-status ${status.toLowerCase()}">
                ${status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </p>
          </div>
        </div>

        <div class="order-actions">
          <span class="status-badge ${order.status?.toLowerCase() || 'pending'}">
            ${order.status || 'Pending'}
          </span>

          <div class="action-buttons">
            <button class="delete-order-btn" onclick="deleteOrder('${order._id}')" title="Delete Order">
              <i class="fi fi-rr-trash"></i>
            </button>
            <button onclick="window.location.href='track-order.html?orderId=${order._id}'" class="track-btn">
              Track Order
            </button>
          </div>
        </div>

      </div>
    `;
  });

});

// Make it globally available for the inline onclick handler
window.deleteOrder = async function (orderId) {
  if (!confirm("Are you sure you want to delete this order?")) {
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // Remove the element from DOM
      const card = document.getElementById(`order-${orderId}`);
      if (card) {
        card.remove();
      }

      // Check if no orders left
      const container = document.getElementById("orders-list");
      if (container && container.children.length === 0) {
        container.innerHTML = "<p>No orders found</p>";
      }
    } else {
      alert("Failed to delete the order");
    }
  } catch (error) {
    console.error("Error deleting order:", error);
    alert("An error occurred while deleting the order.");
  }
};
