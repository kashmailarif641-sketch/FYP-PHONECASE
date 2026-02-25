document.addEventListener("DOMContentLoaded", function () {

  // 🔐 AUTH PROTECTION
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login first.");
    window.location.href = "../../login.html";
    return;
  }

  // 👋 Show Welcome Name
  const welcomeText = document.getElementById("welcomeText");
  if (welcomeText) {
    welcomeText.textContent = "Welcome, " + user.name + "!";
  }

  // 🔓 Logout Handling
  const logoutLink = document.querySelector('.menu li:last-child a');

  if (logoutLink) {
    logoutLink.addEventListener("click", function (e) {
      e.preventDefault();
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
