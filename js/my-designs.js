document.addEventListener("DOMContentLoaded", async () => {

  const designList = document.getElementById("design-list");

  // ===== Get logged in user =====
  const userData = JSON.parse(localStorage.getItem("user"));

  if (!userData || !userData._id) {
    designList.innerHTML = "<p>Please login first.</p>";
    return;
  }

  try {

    // ===== Fetch designs from backend =====
    const response = await fetch(
      `http://localhost:5000/api/design/user/${userData._id}`
    );

    const designs = await response.json();

    if (!response.ok) {
      designList.innerHTML = "<p>Error loading designs.</p>";
      return;
    }

    // ===== If no designs =====
    if (designs.length === 0) {
      designList.innerHTML = `
        <p style="text-align:center; font-size:1.1rem; color:#555;">
          You haven’t saved any designs yet.
        </p>`;
      return;
    }

    // ===== Render cards (Merged Version) =====
    designList.innerHTML = designs.map(design => `
      <div class="design-card">
        <img src="${design.previewImage}" alt="${design.designName}">
        <h3>${design.designName}</h3>

        <p class="design-model">
          Model: ${design.model || "Not Selected"}
        </p>

        <p class="design-material">
          Material: ${design.material || "Standard"}
        </p>

        <p class="design-date">
          Created: ${new Date(design.createdAt).toLocaleDateString()}
        </p>

        <button class="edit-btn" onclick="editDesign('${design._id}')">
          Edit Design
        </button>

        <button class="delete-btn" onclick="deleteDesign('${design._id}')">
          Delete
        </button>
      </div>
    `).join("");

  } catch (error) {
    console.error("Fetch Error:", error);
    designList.innerHTML = "<p>Something went wrong.</p>";
  }

});


// ===== Edit Function =====
function editDesign(designId) {
  window.location.href = `design-studio.html?id=${designId}`;
}


// ===== Delete Function (Backend Version) =====
async function deleteDesign(id) {
  const response = await fetch(`http://localhost:5000/api/design/${id}`, {
    method: "DELETE"
  });

  const data = await response.json();
  alert(data.message);

  if (response.ok) {
    location.reload();
  }
}