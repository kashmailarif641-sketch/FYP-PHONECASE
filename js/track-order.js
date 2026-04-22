document.addEventListener("DOMContentLoaded", () => {
  // Get orderId from URL
  const params = new URLSearchParams(window.location.search);
  const orderId = params.get("orderId");

  if (!orderId) {
    alert("No order ID found");
    return;
  }

  // Fetch order from backend
  fetch(`http://localhost:5000/api/orders/${orderId}`)
    .then(res => {
      if (!res.ok) throw new Error("Order not found");
      return res.json();
    })
    .then(data => {
      // Show order details block
      document.getElementById("orderDetails").style.display = "block";

      // Fill order details
      document.getElementById("design").innerText = data.model + " Case" || "Custom Design";
      document.getElementById("amount").innerText = "Rs " + (data.totalPrice || 1500);
      document.getElementById("date").innerText = new Date(data.createdAt).toLocaleDateString();
      document.getElementById("status").innerText = data.status || "Pending";

      updateProgress(data.status || "Pending");
    })
    .catch(err => {
      console.error(err);
      alert("Error loading order. Please check the Order ID.");
    });

  // Back button functionality
  const backBtn = document.getElementById("backHomeBtn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "order-history.html";
    });
  }
});

// Progress Bar Logic
function updateProgress(status) {
  const steps = document.querySelectorAll(".step");
  const progressBar = document.querySelector(".progress-bar");

  let percentage = 0;

  // Make sure status is capitalized correctly for string matching
  const currentStatus = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

  // Reset all steps first
  steps.forEach(step => step.classList.remove("active"));

  if (currentStatus === "Pending") {
    steps[0].classList.add("active");
    percentage = 12; // Adjusted to point at the first step center
  }

  if (currentStatus === "Processing") {
    steps[0].classList.add("active");
    steps[1].classList.add("active");
    percentage = 37;
  }

  if (currentStatus === "Shipped") {
    steps[0].classList.add("active");
    steps[1].classList.add("active");
    steps[2].classList.add("active");
    percentage = 62;
  }

  if (currentStatus === "Delivered") {
    steps.forEach(step => step.classList.add("active"));
    percentage = 100;
  }

  // Use inline style to control width directly as defined in CSS
  progressBar.innerHTML = `<div style="height: 100%; border-radius: 3px; width: ${percentage}%; background: linear-gradient(90deg, var(--btn-left), var(--btn-right)); transition: width 0.4s ease;"></div>`;
}
