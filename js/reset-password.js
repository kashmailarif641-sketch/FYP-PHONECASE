document.getElementById("resetForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const newPass = document.getElementById("newPassword").value;
  const confirmPass = document.getElementById("confirmPassword").value;

  if (newPass !== confirmPass) {
    alert("Passwords do not match!");
    return;
  }

  // 🔹 Get token from URL
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  if (!token) {
    alert("Invalid or missing token!");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: token,
        newPassword: newPass
      })
    });

    const data = await response.json();

    if (response.ok) {
      // Show success popup
      const popup = document.getElementById("successPopup");
      popup.style.display = "flex";

      setTimeout(() => {
        popup.style.display = "none";
        window.location.href = "login.html";
      }, 2500);

    } else {
      alert(data.message);
    }

  } catch (error) {
    console.log(error);
    alert("Server error");
  }
});