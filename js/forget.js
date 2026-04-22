// forget.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("forgotForm");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const emailInput = form.email.value.trim();

    if (emailInput === "" || !emailInput.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: emailInput })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Reset link generated! Check console for link.");

        console.log("RESET LINK:", data.resetLink); // 👈 VERY IMPORTANT

        form.reset();
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.log(error);
      alert("Server error. Make sure backend is running.");
    }
  });
});