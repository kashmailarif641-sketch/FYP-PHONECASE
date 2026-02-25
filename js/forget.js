// forget.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("forgotForm");
  if (!form) return; // nothing to do if form is missing

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default submit behavior

    const emailInput = (form.email && form.email.value) ? form.email.value.trim() : "";

    // Simple email validation
    if (emailInput === "" || !emailInput.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate backend process
    alert("✅ Password reset link has been sent to your email!");

    // Optional: clear the form after success
    form.reset();

    // Optionally redirect to login after delay
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  });
});
