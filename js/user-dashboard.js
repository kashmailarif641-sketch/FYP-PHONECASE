// 🔥 Save token from URL (Google login)
const params = new URLSearchParams(window.location.search);
const tokenFromURL = params.get("token");

if (tokenFromURL) {
  localStorage.setItem("token", tokenFromURL);
  window.history.replaceState({}, document.title, window.location.pathname);
}

// 🔥 Check token
const token = localStorage.getItem("token");

if (!token) {
  alert("Please login first.");
  window.location.href = "../../login.html";
}

document.addEventListener("DOMContentLoaded", async function () {

  try {

    // 🔥 Fetch user from backend using token
    const res = await fetch("http://localhost:5000/api/me", {
      headers: {
        "Authorization": "Bearer " + token
      }
    });

    const user = await res.json();

    // 🔥 Save user in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // 👋 Show Welcome Name
    const welcomeText = document.getElementById("welcomeText");
    if (welcomeText) {
      welcomeText.textContent = "Welcome, " + user.name + "!";
    }

  } catch (error) {
    console.log(error);
    alert("Session expired. Please login again.");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "../../login.html";
  }

  // 🔓 Logout Handling
  const logoutLink = document.querySelector('.menu li:last-child a');

  if (logoutLink) {
    logoutLink.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "../../login.html";
    });
  }

  // Sidebar Menu Active State
  const menuLinks = document.querySelectorAll('.sidebar .menu li a');

  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      menuLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

});