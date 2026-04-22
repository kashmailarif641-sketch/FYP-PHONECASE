document.addEventListener("DOMContentLoaded", async () => {

  const container = document.getElementById("premiumContainer");

  async function loadPremiumOrders() {
    try {

      const res = await fetch("http://localhost:5000/api/orders/premium");
      const orders = await res.json();

      container.innerHTML = "";

      if (orders.length === 0) {
        container.innerHTML = "<p>No pending premium designs.</p>";
        return;
      }

      orders.forEach(order => {

        const card = document.createElement("div");
        card.classList.add("design-card");

        card.innerHTML = `
                    <div class="design-preview">
                        <img src="${order.designImage}" alt="Premium Design">
                    </div>

                    <div class="design-info">
                        <h3>Order ID: ${order.orderId}</h3>
                        <p>By: ${order.userId?.name} (${order.userId?.email})</p>
                        <p>Base Price: $${order.totalPrice}</p>
                    </div>

                    <div class="actions">
                        <button class="approve-btn" onclick="approvePremium('${order._id}')">
                            Approve & Buy
                        </button>

                        <button class="reject-btn" onclick="rejectPremium('${order._id}')">
                            Reject
                        </button>
                    </div>
                `;

        container.appendChild(card);
      });

    } catch (error) {
      console.error(error);
      container.innerHTML = "<p>Error loading premium designs.</p>";
    }
  }

  loadPremiumOrders();

});

// ===============================
// Approve Premium
// ===============================
async function approvePremium(id) {

  if (!confirm("Are you sure you want to approve and purchase this premium design?")) return;

  await fetch(`http://localhost:5000/api/orders/${id}/premium-approve`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    }
  });

  alert("Premium Approved & Purchased Successfully!");
  location.reload();
}

// ===============================
// Reject Premium
// ===============================
async function rejectPremium(id) {

  if (!confirm("Are you sure you want to reject this premium design?")) return;

  await fetch(`http://localhost:5000/api/orders/${id}/premium-reject`, {
    method: "PUT"
  });

  alert("Premium Rejected!");
  location.reload();
}