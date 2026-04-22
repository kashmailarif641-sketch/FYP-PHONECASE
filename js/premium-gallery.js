document.addEventListener("DOMContentLoaded", async () => {

  const designGrid = document.getElementById("premiumGrid");

  try {

    // 🔥 Fetch Approved Premium Designs From Backend
    const res = await fetch("http://localhost:5000/api/orders/premium-approved");
    const premiumDesigns = await res.json();

    designGrid.innerHTML = "";

    if (premiumDesigns.length === 0) {
      designGrid.innerHTML = "<p style='text-align:center;'>No premium designs available.</p>";
      return;
    }

    premiumDesigns.forEach(order => {

      const card = document.createElement("div");
      card.className = "design-card";

      const imageSrc = order.designImage || "images/placeholder.jpg";

      card.innerHTML = `
        <img src="${imageSrc}" alt="Premium Design">
        <h3>Premium Design</h3>
        <p>By: ${order.userId?.name}</p>
        <p class="price">Rs. ${order.premiumPrice || order.totalPrice}</p>
        <button class="order-btn"
          onclick="orderDesign('Premium Design', '${order.premiumPrice || order.totalPrice}', '${imageSrc}')">
          Order This Design
        </button>
      `;

      designGrid.appendChild(card);

    });

  } catch (error) {
    console.error(error);
    designGrid.innerHTML = "<p>Error loading premium gallery.</p>";
  }

});

// Handle Order
function orderDesign(name, price, image) {

  const orderDetails = {
    name: name,
    price: price,
    image: image
  };

  localStorage.setItem("selectedOrder", JSON.stringify(orderDetails));

  window.location.href = "pages/user/order.html";
}
