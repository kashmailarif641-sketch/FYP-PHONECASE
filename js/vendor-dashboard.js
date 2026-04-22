document.addEventListener("DOMContentLoaded", async () => {

  const userData = JSON.parse(localStorage.getItem("user"));

  if (!userData || userData.role !== "vendor") {
    window.location.href = "../../login.html";
    return;
  }

  // Set welcome message
  const welcomeText = document.getElementById("welcomeText");
  if (welcomeText) {
    welcomeText.innerText = `Welcome, ${userData.name}`;
  }

  try {

    const response = await fetch(
      `http://localhost:5000/api/orders/vendor/dashboard/${userData._id}`
    );

    const data = await response.json();

    // Update cards
    const assignedCount = document.getElementById("assigned-count");
    if (assignedCount) assignedCount.innerText = data.assignedOrders;

    const printingCount = document.getElementById("printing-count");
    if (printingCount) printingCount.innerText = data.inProduction;

    const completedCount = document.getElementById("completed-count");
    if (completedCount) completedCount.innerText = data.completed;

    // Recent Activity Table
    const tableBody = document.getElementById("recent-orders");
    if (tableBody) {
      tableBody.innerHTML = "";

      if (!data.recentOrders || data.recentOrders.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center;">No recent orders.</td></tr>`;
      } else {
        data.recentOrders.forEach(order => {
          tableBody.innerHTML += `
            <tr>
              <td>#${order._id.slice(-6)}</td>
              <td>${order.userId?.name || "N/A"}</td>
              <td><span class="status ${order.orderStatus.toLowerCase()}">${order.orderStatus}</span></td>
              <td>${new Date(order.createdAt).toLocaleDateString()}</td>
            </tr>
          `;
        });
      }
    }

  } catch (error) {
    console.log("Error loading dashboard:", error);
  }

});

// Logout logic
const logoutBtn = document.getElementById("vendorLogout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "../../login.html";
  });
}
