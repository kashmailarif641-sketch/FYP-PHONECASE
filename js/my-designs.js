document.addEventListener("DOMContentLoaded", () => {
  const currentUser = localStorage.getItem("loggedInUser");
  const designList = document.getElementById("design-list");

  // ===== Dummy data (ONLY if no real designs) =====
  const dummyDesigns = [
    {
      id: 101,
      user: currentUser,
      name: "Floral Pattern",
      image: "../../images/floral asthetic.jpg"
    },
    {
      id: 102,
      user: currentUser,
      name: "Abstract Waves",
      image: "../../images/Abstract Geometric.jpg"
    },
    {
      id: 103,
      user: currentUser,
      name: "Neon Gaming Theme",
      image: "../../images/retro neon.jpg"
    }
  ];

  // ALL saved designs from localStorage
  let allDesigns = JSON.parse(localStorage.getItem("designs_v2")) || [];

  // If localStorage empty → insert dummy designs
  if (allDesigns.length === 0) {
    allDesigns = dummyDesigns;
    localStorage.setItem("designs_v2", JSON.stringify(allDesigns));
  }

  // Filter: Only current user's designs
  const userDesigns = allDesigns.filter(design => design.user === currentUser);

  // If no designs for this user
  if (userDesigns.length === 0) {
    designList.innerHTML = `
      <p style="text-align:center; font-size:1.1rem; color:#555;">
        You haven’t saved any designs yet. Create one from the design studio!
      </p>`;
    return;
  }

  // Show design cards
  designList.innerHTML = userDesigns.map(design => `
    <div class="design-card">
      <img src="${design.image}" alt="${design.name}">
      <h3>${design.name}</h3>
      <button class="edit-btn" onclick="editDesign(${design.id})">Edit Design</button>
    </div>
  `).join("");
});

// ===== Edit Function =====
function editDesign(designId) {
  localStorage.setItem("editDesignId", designId);
  window.location.href = "design-studio.html";
}
