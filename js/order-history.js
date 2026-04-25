document.addEventListener("DOMContentLoaded", async () => {

  const userJson = localStorage.getItem("user");
  const user = userJson && userJson !== "undefined" && userJson !== "null" ? JSON.parse(userJson) : null;
  const userId = localStorage.getItem("userId") || (user && user._id);

  const container = document.getElementById("orders-list");

  if (!userId || userId === "null" || userId === "undefined") {
    if (container) {
      container.innerHTML = "<p style='text-align:center;'>User session not found. Please <a href='../../login.html'>log in</a> again.</p>";
    }
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:5000/api/orders/user/${userId}`
    );

    if (!response.ok) {
      if (container) {
        container.innerHTML = "<p style='text-align:center;'>Error fetching orders. Please try again later.</p>";
      }
      return;
    }

    const orders = await response.json();
    console.log("User Orders:", orders);

    if (!container) return;
    container.innerHTML = "";

    if (!Array.isArray(orders) || orders.length === 0) {
      container.innerHTML = "<p style='text-align:center; padding: 20px; color: #666;'>No orders found</p>";
      return;
    }

    orders.forEach(order => {
      // Logic for status and IDs
      const orderPaymentStatus = (order.payment?.status || "pending").toLowerCase();
      const premiumBuybackStatus = (order.paymentStatus || "pending").toLowerCase();
      const orderStatus = (order.status || "pending").toLowerCase();
      const isPremium = order.isPremium === true || order.isPremium === "true";
      const shortId = order._id ? order._id.slice(-6).toUpperCase() : "N/A";

      // Render order card
      container.innerHTML += `
        <div class="order-card" id="order-${order._id}">
          
          <div class="order-content">
            <!-- Order Image -->
            <div class="order-left">
              <img src="${order.designImage || '../../images/default-case.png'}" class="order-image" alt="Design Preview"/>
            </div>

            <!-- Order Info -->
            <div class="order-middle">
              <h3>
                 ${order.model} Case 
                 ${isPremium ? '<span class="premium-badge">Premium</span>' : ''}
              </h3>
              
              <div class="order-details-text">
                <p><strong>Order ID:</strong> #${shortId}</p>
                <p><strong>Date:</strong> ${order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}</p>
                <p><strong>Total:</strong> Rs. ${order.totalPrice || 1500}</p>
              </div>

              <!-- Main Order Progress & Payment (Admin Verified) -->
              <div class="status-section" style="margin-top: 0px; padding-top: 0px;">
                <p><strong>Order Payment:</strong> 
                  <span class="payment-status-text ${orderPaymentStatus}">
                    ${orderPaymentStatus === 'paid' ? 'PAID ✅' : 'PENDING ⏳'}
                  </span>
                  <small style="display:block; font-size:10px; color:#888;">(Verified by Admin)</small>
                </p>
                
                <p style="margin-top:5px;"><strong>Order Status:</strong> 
                  <span class="status-badge ${orderStatus}">
                    ${orderStatus.charAt(0).toUpperCase() + orderStatus.slice(1)}
                  </span>
                </p>
              </div>

              <!-- Premium Transaction Section (User Confirmed) -->
              ${isPremium ? `
                <div class="premium-segment" style="margin-top: 15px; padding: 10px; background: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0;">
                  <h4 style="font-size: 13px; color: #0d2261; margin-bottom: 8px; display: flex; align-items: center; gap: 5px;">
                    <i class="fi fi-rr-star"></i> Premium Design Sale
                  </h4>
                  <p style="font-size: 12px; margin-bottom: 5px;"><strong>Approval:</strong> ${order.premiumStatus || "Pending"}</p>
                  <p style="font-size: 12px; margin-bottom: 10px;"><strong>Payment Receive Status:</strong> 
                    <span class="payment-status-text ${premiumBuybackStatus}">
                      ${premiumBuybackStatus === 'verified' ? 'RECEIVED ✅' : 'PENDING ⏳'}
                    </span>
                  </p>

                  ${order.premiumStatus === "approved" && premiumBuybackStatus === "pending" ? `
                    <button onclick="viewPaymentDetails('${order._id}', '${shortId}')" class="view-payment-btn" style="width: 100%; padding: 8px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 12px; display: flex; align-items: center; justify-content: center; gap: 5px;">
                      <i class="fi fi-rr-eye"></i> Confirm Payment Received
                    </button>
                  ` : ""}
                </div>
              ` : ""}
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="order-actions">
            <div class="action-buttons">
              <button class="delete-order-btn" onclick="deleteOrder('${order._id}')" title="Delete Order">
                <i class="fi fi-rr-trash"></i>
              </button>
            </div>
          </div>

        </div>
      `;
    });
  } catch (error) {
    console.error("Fetch Orders Error:", error);
    if (container) {
      container.innerHTML = "<p style='text-align:center; padding: 20px; color: #dc2626;'>Unable to load orders at this time.</p>";
    }
  }

});

// View Payment Details Modal Logic
window.viewPaymentDetails = async function (orderId, shortId) {
  try {
    const response = await fetch(`http://localhost:5000/api/orders/premium-payment/order/${orderId}`);
    if (!response.ok) throw new Error("Could not fetch payment details");

    const payment = await response.json();

    // Populate Modal Fields
    document.getElementById("modalOrderId").innerText = `#${shortId}`;
    document.getElementById("modalAmount").innerText = payment.amount;
    document.getElementById("modalMethod").innerText = payment.paymentMethod;
    document.getElementById("modalTransactionId").innerText = payment.transactionId;
    document.getElementById("modalDate").innerText = new Date(payment.paymentDate).toLocaleDateString(undefined, {
      year: 'numeric', month: 'long', day: 'numeric'
    });

    // Set up the confirm button inside the modal
    const confirmBtn = document.getElementById("confirmInModalBtn");
    confirmBtn.onclick = () => confirmPremiumPayment(orderId);

    // Show Modal
    document.getElementById("paymentDetailsModal").style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent background scroll

  } catch (error) {
    console.error("View Details Error:", error);
    alert("Unable to load payment details. Please try again later.");
  }
};

window.closePaymentModal = function () {
  document.getElementById("paymentDetailsModal").style.display = "none";
  document.body.style.overflow = "auto"; // Restore scroll
};

// Global Premium Payment Confirmation
window.confirmPremiumPayment = async function (orderId) {
  if (!confirm("Confirm that you have successfully received the amount shown from the Admin?")) return;

  const confirmBtn = document.getElementById("confirmInModalBtn");
  const originalHtml = confirmBtn.innerHTML;
  
  try {
    confirmBtn.disabled = true;
    confirmBtn.innerHTML = '<i class="fi fi-rr-spinner rotate"></i> Verifying...';

    const response = await fetch(`http://localhost:5000/api/orders/${orderId}/confirm-payment`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      alert("Verification Successful! ✅ You have confirmed receiving the payment for your premium design.");
      location.reload();
    } else {
      throw new Error("Confirmation failed");
    }
  } catch (error) {
    console.error("Confirm Payment Error:", error);
    alert("Error confirming payment. Please check your connection.");
    confirmBtn.disabled = false;
    confirmBtn.innerHTML = originalHtml;
  }
};

// Global Order Delete Logic
window.deleteOrder = async function (orderId) {
  if (!confirm("Are you sure you want to delete this order?")) return;

  try {
    const response = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
      method: "DELETE"
    });

    if (response.ok) {
      const card = document.getElementById(`order-${orderId}`);
      if (card) card.remove();

      const container = document.getElementById("orders-list");
      if (container && container.children.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding: 20px;'>No orders found</p>";
      }
    } else {
      alert("Failed to delete the order.");
    }
  } catch (error) {
    console.error("Delete Error:", error);
    alert("An error occurred. Please try again.");
  }
};
