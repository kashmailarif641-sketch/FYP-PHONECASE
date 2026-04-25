
document.addEventListener("DOMContentLoaded", function () {

  const user = JSON.parse(localStorage.getItem("user"));

  // 🔐 Auth + Role Protection
  if (!user || user.role !== "admin") {
    alert("Access denied. Admins only.");
    window.location.href = "../../login.html";
    return;
  }

  // 👋 Show Admin Name (optional)
  const welcomeText = document.getElementById("welcomeText");
  if (welcomeText) {
    welcomeText.textContent = "Welcome Admin, " + user.name + "!";
  }

});

// ====== Wait until DOM is ready ======
document.addEventListener("DOMContentLoaded", function () {

  // ===== Sidebar Navigation Active Link Handling =====
  const navLinks = document.querySelectorAll(".admin-nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // remove active from all
      navLinks.forEach(l => l.classList.remove("active"));

      // add active to clicked
      this.classList.add("active");

      // redirect to that page
      const targetPage = this.getAttribute("href");
      window.location.href = targetPage;
    });
  });

  // ===== Dashboard Intro Animation =====
  const header = document.querySelector(".dashboard-header");
  const cards = document.querySelectorAll(".card");
  const table = document.querySelector(".recent-activity");

  setTimeout(() => {
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";
  }, 200);

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 300 + index * 150);
  });

  setTimeout(() => {
    table.style.opacity = "1";
    table.style.transform = "translateY(0)";
  }, 1000);

  // ===== Dummy Refresh Button (Future Use) =====
  // You can later add refresh stats logic here when backend connects
});

async function loadDashboardStats() {
  try {
    // 1. Load User Count
    const userRes = await fetch("http://localhost:5000/api/admin/users");
    const users = await userRes.json();
    const userCountEl = document.getElementById("totalUsersCount");
    if (userCountEl) userCountEl.innerText = users.length;

    // 2. Load Vendor Count 
    const vendorRes = await fetch("http://localhost:5000/api/admin/vendors");
    const vendors = await vendorRes.json();
    const vendorCountEl = document.getElementById("totalVendorsCount");
    if (vendorCountEl) {
      const approvedCount = vendors.filter(v => v.status === "Approved").length;
      vendorCountEl.innerText = approvedCount;
    }

    // 3. Load Pending Count (Sync with badge)
    const pendingRes = await fetch("http://localhost:5000/api/admin/pending-vendors-count");
    const pendingData = await pendingRes.json();
    const pendingStatsEl = document.getElementById("pendingVendorsStats");
    if (pendingStatsEl) pendingStatsEl.innerText = pendingData.count;

    const badge = document.getElementById("vendorBadge");
    if (badge) {
      badge.innerText = pendingData.count;
      badge.style.display = pendingData.count > 0 ? "inline-block" : "none";
    }

  } catch (error) {
    console.error("Error loading dashboard stats:", error);
  }
}

loadDashboardStats();
