document.addEventListener("DOMContentLoaded", () => {
    // 🔐 Auth + Role Protection
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "admin") {
        alert("Access denied. Admins only.");
        window.location.href = "../../login.html";
        return;
    }

    // 👋 Welcome Text (for dashboard)
    const welcomeText = document.getElementById("welcomeText");
    if (welcomeText) {
        welcomeText.textContent = `Welcome Admin, ${user.name}!`;
    }

    // ===== Sidebar Active Link Detection =====
    const navLinks = document.querySelectorAll(".admin-nav a");
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split("/").pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPage) {
            link.classList.add("active");
        } else {
            // Keep existing active class if it was hardcoded and JS failed to match
            // but usually we want JS to be the truth
            link.classList.remove("active");
            if (linkPath === currentPage) link.classList.add("active");
        }
    });

    // ===== Responsive Menu Toggle =====
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".admin-sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    const body = document.body;

    if (menuToggle && sidebar && overlay) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.add("active");
            overlay.classList.add("active");
            body.style.overflow = "hidden";
        });

        overlay.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
            body.style.overflow = "";
        });

        // Close on link click
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                sidebar.classList.remove("active");
                overlay.classList.remove("active");
                body.style.overflow = "";
            });
        });
    }

    // ===== Pending Vendor Count Badge =====
    async function updatePendingCount() {
        try {
            const res = await fetch("http://localhost:5000/api/admin/pending-vendors-count");
            const data = await res.json();
            const badge = document.getElementById("vendorBadge");
            if (badge) {
                badge.innerText = data.count;
                badge.style.display = data.count > 0 ? "inline-block" : "none";
            }
        } catch (error) {
            console.error("Error loading pending count:", error);
        }
    }
    updatePendingCount();

    // ===== Logout Logic =====
    const logoutBtn = document.getElementById("adminLogout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (confirm("Are you sure you want to logout?")) {
                localStorage.removeItem("user");
                window.location.href = "../../login.html";
            }
        });
    }
});
