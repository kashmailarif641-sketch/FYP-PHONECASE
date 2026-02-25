// ===============================
// CaseCraft | Track Order Page
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  const progressBar = document.getElementById("progressBar");
  const backHomeBtn = document.getElementById("backHomeBtn");

  // 1. Get Order Data from LocalStorage
  const confirmedOrder = JSON.parse(localStorage.getItem("confirmedOrder"));
  let orderStatus = "Pending"; // Default

  if (confirmedOrder) {
    // Populate Order Details
    document.getElementById("orderDetails").style.display = "block";
    document.getElementById("orderDesignName").textContent = confirmedOrder.design.name;
    document.getElementById("orderPrice").textContent = "Rs. " + confirmedOrder.design.price;
    document.getElementById("orderDate").textContent = new Date(confirmedOrder.date).toLocaleDateString();

    // Payment Status Logic
    const pStatus = confirmedOrder.payment.status;
    const pMode = confirmedOrder.payment.mode;

    let displayStatus = pStatus;
    if (pMode === "cod") {
      displayStatus = "Pending"; // User requested simple "Pending" for COD
    } else if (pMode === "jazzcash") {
      displayStatus = "Payment Verification Pending";
    }

    document.getElementById("paymentStatus").textContent = displayStatus;

    // Determine Status for Progress Bar
    // Logic: If payment is pending/verification, it's 'Pending'
    // This can be expanded later if we have a real backend updating status
    if (pStatus === "Pending COD" || pStatus === "Pending Verification") {
      orderStatus = "Pending";
    }
  } else {
    // No order found case
    document.querySelector(".sub-text").textContent = "No active order found.";
  }

  // Set active steps based on order status
  let activeIndex = 0;
  if (orderStatus === "Pending") activeIndex = 0;
  else if (orderStatus === "Processing") activeIndex = 1;
  else if (orderStatus === "Shipped") activeIndex = 2;
  else if (orderStatus === "Delivered") activeIndex = 3;

  steps.forEach((step, index) => {
    if (index <= activeIndex) {
      step.classList.add("active");
    }
  });

  // Animate progress bar width
  const progressWidth = (activeIndex / (steps.length - 1)) * 100;
  progressBar.style.background = "linear-gradient(90deg, #1E40AF, #06B6D4)";
  progressBar.style.width = `${progressWidth}%`;

  // Button action: back to dashboard
  backHomeBtn.addEventListener("click", () => {
    window.location.href = "user-dashboard.html";
  });
});
