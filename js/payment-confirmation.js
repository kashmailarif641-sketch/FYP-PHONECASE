// ===============================
// CaseCraft | Payment Confirmation Page
// ===============================

// Run once the page content is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Select Back to Home button
  const backHomeBtn = document.getElementById("backHomeBtn");

  // Animate success icon smoothly when page loads
  const checkmark = document.querySelector(".checkmark");
  if (checkmark) {
    checkmark.style.opacity = "0";
    checkmark.style.transform = "scale(0.8)";
    setTimeout(() => {
      checkmark.style.transition = "all 0.6s ease";
      checkmark.style.opacity = "1";
      checkmark.style.transform = "scale(1)";
    }, 200);
  }

  // Small fade-in animation for the confirmation card
  const confirmationCard = document.querySelector(".confirmation-card");
  if (confirmationCard) {
    confirmationCard.style.opacity = "0";
    confirmationCard.style.transform = "translateY(30px)";
    setTimeout(() => {
      confirmationCard.style.transition = "all 0.8s ease";
      confirmationCard.style.opacity = "1";
      confirmationCard.style.transform = "translateY(0)";
    }, 400);
  }

  // Handle "Back to Home" button click
  if (backHomeBtn) {
    backHomeBtn.addEventListener("click", () => {
      // Add a small button animation
      backHomeBtn.classList.add("clicked");
      setTimeout(() => {
        // Redirect to dashboard page
        window.location.href = "user-dashboard.html";
      }, 500);
    });
  }

  // Dynamic Status Message Logic
  const statusTitle = document.getElementById("statusTitle");
  const statusMessage = document.getElementById("statusMessage");
  const confirmedOrder = JSON.parse(localStorage.getItem("confirmedOrder"));

  if (confirmedOrder && statusTitle && statusMessage) {
    // Determine message based on payment mode/status
    const paymentMode = confirmedOrder.payment ? confirmedOrder.payment.mode : null;

    if (paymentMode === "cod") {
      statusTitle.textContent = "Order Placed Successfully!";
      statusMessage.innerHTML = `Thank you, <strong id="confirmName"></strong>. Your order has been placed.<br>
      Please pay Rs. <strong id="confirmPrice"></strong> to the rider upon delivery.`;
    } else if (paymentMode === "jazzcash") {
      statusTitle.textContent = "Payment Submitted!";
      statusMessage.innerHTML = `Thank you, <strong id="confirmName"></strong>! We have received your payment details.<br>
      We will verify Transaction ID: <strong>${confirmedOrder.payment.trxId}</strong> for Rs. <strong id="confirmPrice"></strong> and ship your order shortly.`;
    }

    const price = confirmedOrder.price;
    const name = confirmedOrder.name;

    if (document.getElementById("confirmPrice")) document.getElementById("confirmPrice").textContent = price;
    if (document.getElementById("confirmName")) document.getElementById("confirmName").textContent = name;
  }

  // Optional: auto-scroll to top when page loads
  window.scrollTo({ top: 0, behavior: "smooth" });
});
