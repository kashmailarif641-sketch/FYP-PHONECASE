document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector(".gallery-container");
  const addBtn = document.getElementById('addDesignBtn');
  const modal = document.getElementById('designModal');
  const designNameInput = document.querySelector("#designName");
  const priceInput = document.querySelector("#price");
  const imageFileInput = document.querySelector("#imageFile");
  const saveBtn = document.querySelector(".save-btn");

  function openModal() {
    modal.classList.add('open');
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.style.display = "none";
  }

  if (addBtn) {
    addBtn.addEventListener('click', () => {
      designNameInput.value = "";
      priceInput.value = "";
      imageFileInput.value = "";
      openModal();
    });
  }

  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  // LOAD DESIGNS
  async function loadDesigns() {
    try {
      const response = await fetch("http://localhost:5000/api/premium-gallery/");
      const designs = await response.json();

      galleryContainer.innerHTML = "";

      designs.forEach(design => {
        const imageUrl = design.image.startsWith("http") ? design.image : `http://localhost:5000/${design.image}`;
        const card = `
                    <div class="gallery-card">
                        <img src="${imageUrl}" alt="${design.name}"/>
                        <div class="gallery-info">
                            <h3>${design.name}</h3>
                            <p>Price: Rs ${design.price}</p>
                        </div>
                        <div class="gallery-actions">
                            <button class="approve-btn">Edit</button>
                        </div>
                    </div>
                `;
        galleryContainer.innerHTML += card;
      });

    } catch (error) {
      console.error("Error loading designs:", error);
    }
  }

  // SAVE DESIGN
  if (saveBtn) {
    saveBtn.addEventListener("click", async () => {
      const designName = designNameInput.value;
      const price = priceInput.value;
      const imageFile = imageFileInput.files[0];

      if (!designName || !price || !imageFile) {
        alert("Please fill all fields and select an image");
        return;
      }

      const formData = new FormData();
      formData.append("name", designName);
      formData.append("price", price);
      formData.append("image", imageFile);

      try {
        const response = await fetch("http://localhost:5000/api/premium-gallery/add-manual", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (response.ok) {
          alert("Design Added Successfully ✅");
          loadDesigns(); // reload gallery
          closeModal();
        } else {
          alert("Error: " + (data.error || "Failed to upload"));
        }

      } catch (error) {
        console.error("Error saving design:", error);
        alert("Server error occurred");
      }
    });
  }

  // INITIAL LOAD
  loadDesigns();
});
