document.addEventListener("DOMContentLoaded", () => {
  const currentUser = localStorage.getItem("loggedInUser") || "demoUser"; // fallback
  const ordersList = document.getElementById("orders-list");

  // ===== Dummy Orders =====
  // ===== Dummy Orders =====
  const dummyOrders = [
    {
      id: 101,
      user: "demoUser",
      designName: "Galaxy Blue Case",
      image: "../../images/Ocean Blue.jpg",
      date: "2025-11-28",
      status: "Pending"
    },
    {
      id: 102,
      user: "demoUser",
      designName: "Floral Art Case",
      image: "../../images/floral asthetic.jpg",
      date: "2025-11-25",
      status: "Completed"
    },
    {
      id: 103,
      user: "demoUser",
      designName: "Abstract Splash",
      image: "../../images/Abstract Geometric.jpg",
      date: "2025-11-20",
      status: "Shipped"
    },
    {
      id: 104,
      user: "demoUser",
      designName: "Minimal Black",
      image: "../../images/Minimal Black.jpg",
      date: "2025-11-22",
      status: "Pending"
    }
  ];

  // ===== Load orders from localStorage or fallback to dummy =====
  let allOrders = JSON.parse(localStorage.getItem("orders_v4"));
  if (!allOrders || allOrders.length === 0) {
    allOrders = dummyOrders;
    localStorage.setItem("orders_v4", JSON.stringify(dummyOrders));
  }

  // Filter current user's orders
  const userOrders = allOrders.filter(order => order.user === currentUser);

  if (userOrders.length === 0) {
    ordersList.innerHTML = `<p style="text-align:center; font-size:1.1rem; color:#555;">
      You haven’t placed any orders yet.
    </p>`;
    return;
  }

  // Display orders
  ordersList.innerHTML = userOrders.map(order => `
    <div class="order-card">
      <div class="order-details">
        <img src="${order.image}" alt="${order.designName}">
        <div class="order-info">
          <h3>${order.designName}</h3>
          <p>Order ID: #${order.id}</p>
          <p>Date: ${order.date}</p>
        </div>
      </div>
      <span class="status ${order.status.toLowerCase()}">${order.status}</span>
    </div>
  `).join("");
});
