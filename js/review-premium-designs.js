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
                        <p>JazzCash: ${order.userId?.jazzcashNumber || "Not Provided"}</p>
                        <p>Price: Rs ${order.premiumPrice}</p>
                    </div>

                    <div class="actions">
                        ${order.premiumStatus === "approved" ? (
          order.addedToGallery ? `
                            <button 
                                class="reject-btn" 
                                onclick="removeFromGallery('${order._id}', '${order.designImage}')"
                            >
                                Remove from Gallery
                            </button>
                            ` : `
                            <button 
                                class="add-gallery-btn" 
                                ${order.paymentStatus !== "Verified" ? "disabled" : ""}
                                onclick="openAddGalleryForm('${order._id}', '${order.orderId}', '${order.designImage}')"
                                style="${order.paymentStatus !== "Verified" ? "opacity:0.6; cursor:not-allowed; background: gray; color: white; border: none; padding: 10px; border-radius: 5px;" : "background: linear-gradient(45deg, #FFD700, #FFA500); color:white; border: none; padding: 10px; border-radius: 5px; cursor: pointer;"}"
                            >
                                ${order.paymentStatus !== "Verified" ? "Awaiting User Payment" : "Add to Gallery"}
                            </button>
                        `) : `
                            <button class="approve-btn" onclick="openPaymentForm('${order._id}', '${order.userId?._id}', '${order.orderId}', '${order.userId?.name}', '${order.userId?.jazzcashNumber || "Not Provided"}', '${order.premiumPrice}')">
                                Approve & Buy
                            </button>
                            <button class="reject-btn" onclick="rejectPremium('${order._id}')">
                                Reject
                            </button>
                        `}
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

// ===============================
// Payment Modal Logic
// ===============================
let lastBtn = null;

function openPaymentForm(mongoOrderId, mongoUserId, orderId, name, number, price) {
  lastBtn = event.currentTarget;
  document.getElementById("paymentModal").style.display = "flex";

  document.getElementById("mongoOrderId").value = mongoOrderId;
  document.getElementById("mongoUserId").value = mongoUserId;
  document.getElementById("orderId").value = orderId;
  document.getElementById("userName").value = name;
  document.getElementById("userNumber").value = number;
  document.getElementById("amount").value = price;
}

function closeModal() {
  document.getElementById("paymentModal").style.display = "none";
}

async function savePayment() {
  const mongoOrderId = document.getElementById("mongoOrderId").value;
  const mongoUserId = document.getElementById("mongoUserId").value;
  const orderId = document.getElementById("orderId").value;
  const userName = document.getElementById("userName").value;
  const userNumber = document.getElementById("userNumber").value;
  const amount = document.getElementById("amount").value;
  const method = document.getElementById("paymentMethod").value;
  const txn = document.getElementById("transactionId").value;
  const date = document.getElementById("paymentDate").value;

  if (!method || !txn || !date) {
    alert("Fill all fields");
    return;
  }

  try {
    // 1. SAVE TO BACKEND (Persistence)
    const response = await fetch("http://localhost:5000/api/orders/premium-payment/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        orderId: mongoOrderId,
        userId: mongoUserId,
        amount: Number(amount),
        paymentMethod: method,
        transactionId: txn,
        paymentDate: date
      })
    });

    if (response.ok) {
      alert("Payment recorded! Now wait for user confirmation. ✅");
      closeModal();
      location.reload();
    } else {
      alert("Failed to save payment to database.");
    }

  } catch (error) {
    console.error("Save Payment Error:", error);
    alert("Error connecting to server.");
  }
}

// ===============================
// Add to Gallery Modal Logic
// ===============================
function openAddGalleryForm(id, name, image) {
  document.getElementById("addDesignModal").style.display = "flex";

  // Auto fill fields
  document.getElementById("galleryDesignName").value = name;
  document.getElementById("galleryPrice").value = ""; // Price not pre-filled as requested

  // Save temporarily in localStorage or just keep in variables
  localStorage.setItem("selectedDesign", JSON.stringify({
    id,
    name,
    image
  }));
}

function closeAddGalleryModal() {
  document.getElementById("addDesignModal").style.display = "none";
}

async function saveToGallery() {
  const selected = JSON.parse(localStorage.getItem("selectedDesign"));
  const name = document.getElementById("galleryDesignName").value;
  const price = document.getElementById("galleryPrice").value;

  if (!name || !price) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/premium-gallery/add-premium", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        price: price,
        image: selected.image
      })
    });

    if (res.ok) {
      alert("Design added to gallery successfully! ✅");

      // Also approve the premium design in orders
      await fetch(`http://localhost:5000/api/orders/${selected.id}/premium-approve`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        }
      });

      closeAddGalleryModal();
      location.reload();
    } else {
      alert("Failed to add design to gallery.");
    }
  } catch (error) {
    console.error("Save to Gallery Error:", error);
    alert("Error connecting to server.");
  }
}

async function removeFromGallery(orderId, image) {
  if (!confirm("Are you sure you want to remove this design from the gallery?")) return;

  try {
    // 1. Remove from PremiumGallery collection
    const res1 = await fetch("http://localhost:5000/api/premium-gallery/remove-premium", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ image })
    });

    // 2. Reset addedToGallery flag in Order
    const res2 = await fetch(`http://localhost:5000/api/orders/${orderId}/premium-unapprove`, {
      method: "PUT"
    });

    if (res1.ok && res2.ok) {
      alert("Design removed from gallery successfully! 🗑️");
      location.reload();
    } else {
      alert("Failed to remove design.");
    }
  } catch (error) {
    console.error("Remove from Gallery Error:", error);
    alert("Error connecting to server.");
  }
}

// Expose functions to global scope
window.openPaymentForm = openPaymentForm;
window.closeModal = closeModal;
window.savePayment = savePayment;
window.openAddGalleryForm = openAddGalleryForm;
window.closeAddGalleryModal = closeAddGalleryModal;
window.saveToGallery = saveToGallery;
window.removeFromGallery = removeFromGallery;