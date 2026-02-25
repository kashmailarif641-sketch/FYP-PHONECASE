document.addEventListener("DOMContentLoaded", () => {
  const addCategoryBtn = document.getElementById("addCategoryBtn");
  const categoryInput = document.getElementById("categoryInput");
  const categoryList = document.getElementById("categoryList");
  const CATEGORY_KEY = "contentCategories";

  // Load Categories on startup
  let categories = JSON.parse(localStorage.getItem(CATEGORY_KEY)) || ["Floral", "Abstract", "Minimalist"];

  function saveCategories() {
    localStorage.setItem(CATEGORY_KEY, JSON.stringify(categories));
  }

  function renderCategories() {
    categoryList.innerHTML = "";
    categories.forEach((cat, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${cat} <button class="delete-btn" data-index="${index}">Delete</button>`;
      categoryList.appendChild(li);
    });
  }

  // Initial render
  renderCategories();

  addCategoryBtn.addEventListener("click", () => {
    const name = categoryInput.value.trim();
    if (name === "") return alert("Please enter a category name!");

    categories.push(name);
    saveCategories();
    renderCategories();
    categoryInput.value = "";
  });

  categoryList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const index = e.target.getAttribute("data-index");
      categories.splice(index, 1);
      saveCategories();
      renderCategories();
    }
  });

  // Announcements Logic (unchanged)
  // Announcements Logic with Persistence
  const postAnnouncementBtn = document.getElementById("postAnnouncementBtn");
  const announcementInput = document.getElementById("announcementInput");
  const announcementList = document.getElementById("announcementList");
  const ANNOUNCEMENT_KEY = "siteAnnouncements";

  // Load Announcements
  let announcements = JSON.parse(localStorage.getItem(ANNOUNCEMENT_KEY)) || [];

  function renderAnnouncements() {
    announcementList.innerHTML = "";
    announcements.forEach((text, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${text}</span> <button class="delete-ann-btn delete-btn" data-index="${index}">Delete</button>`;
      announcementList.appendChild(li);
    });
  }

  postAnnouncementBtn.addEventListener("click", () => {
    const text = announcementInput.value.trim();
    if (text === "") return alert("Please write something!");

    announcements.unshift(text); // Add to top
    localStorage.setItem(ANNOUNCEMENT_KEY, JSON.stringify(announcements));
    renderAnnouncements();
    announcementInput.value = "";
  });

  announcementList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-ann-btn")) {
      const index = e.target.getAttribute("data-index");
      announcements.splice(index, 1);
      localStorage.setItem(ANNOUNCEMENT_KEY, JSON.stringify(announcements));
      renderAnnouncements();
    }
  });

  // Initial Render
  renderAnnouncements();

  /* ===== Phone Models Management Logic ===== */
  const addModelBtn = document.getElementById("addModelBtn");
  const modelNameInput = document.getElementById("modelNameInput");
  const modelBrandSelect = document.getElementById("modelBrandSelect");
  const basePriceInput = document.getElementById("basePriceInput");
  const customPriceInput = document.getElementById("customPriceInput");
  const modelImgInput = document.getElementById("modelImgInput");
  const modelList = document.getElementById("modelList");
  const MODELS_KEY = "phoneModels";

  // Load Models
  let models = JSON.parse(localStorage.getItem(MODELS_KEY)) || [];

  function saveModels() {
    localStorage.setItem(MODELS_KEY, JSON.stringify(models));
  }

  function renderModels() {
    modelList.innerHTML = "";
    models.forEach((model, index) => {
      const li = document.createElement("li");
      li.style.display = "flex";
      li.style.alignItems = "center";
      li.style.gap = "10px";

      const imgTag = model.img ? `<img src="${model.img}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 6px;">` : "";

      li.innerHTML = `
        ${imgTag}
        <div style="flex: 1;">
          <strong>${model.name}</strong> <small>(${model.brand})</small><br>
          <span style="font-size: 0.85em; color: #666;">Base: Rs.${model.basePrice} | Custom: Rs.${model.customPrice}</span>
        </div>
        <button class="delete-btn" data-index="${index}">Delete</button>
      `;
      modelList.appendChild(li);
    });
  }

  addModelBtn.addEventListener("click", () => {
    const name = modelNameInput.value.trim();
    const brand = modelBrandSelect.value;
    const basePrice = basePriceInput.value.trim();
    const customPrice = customPriceInput.value.trim();
    const img = modelImgInput.value.trim();

    if (!name || !basePrice || !customPrice) {
      return alert("Please fill in Name and Prices.");
    }

    const newModel = {
      name,
      brand,
      basePrice, // Store as string or number, keeping simple
      customPrice,
      img: img || "https://placehold.co/100x200?text=Phone" // Fallback placeholder
    };

    models.push(newModel);
    saveModels();
    renderModels();

    // Reset inputs
    modelNameInput.value = "";
    basePriceInput.value = "";
    customPriceInput.value = "";
    modelImgInput.value = "";
  });

  modelList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const index = e.target.getAttribute("data-index");
      if (confirm("Delete this model?")) {
        models.splice(index, 1);
        saveModels();
        renderModels();
      }
    }
  });

  // Initial Render for Models
  renderModels();
});
