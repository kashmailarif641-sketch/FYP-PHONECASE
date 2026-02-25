document.getElementById("resetForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const newPass = document.getElementById("newPassword").value;
  const confirmPass = document.getElementById("confirmPassword").value;

  if (newPass !== confirmPass) {
    alert("Passwords do not match!");
    return;
  }

  // Show success popup
  const popup = document.getElementById("successPopup");
  popup.style.display = "flex";

  // Hide popup and redirect after 2.5 seconds
  setTimeout(() => {
    popup.style.display = "none";
    window.location.href = "login.html";
  }, 2500);
});
