// ===== premium-gallery.js =====
document.addEventListener("DOMContentLoaded", () => {
  // === Load Categories for Filtering ===
  const filterContainer = document.getElementById("categoryFilters");
  const categories = JSON.parse(localStorage.getItem("contentCategories")) || ["Floral", "Abstract", "Minimalist"];

  // Add "All" button
  const allBtn = document.createElement("button");
  allBtn.textContent = "All";
  allBtn.className = "filter-btn active"; // Add CSS class for styling
  allBtn.onclick = () => filterDesigns("All", allBtn);
  filterContainer.appendChild(allBtn);

  // Add Dynamic Categories
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = "filter-btn";
    btn.onclick = () => filterDesigns(cat, btn);
    filterContainer.appendChild(btn);
  });

  function filterDesigns(category, btnElement) {
    // Update active state
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btnElement.classList.add("active");

    // Filter Logic
    const cards = document.querySelectorAll(".design-card");
    cards.forEach(card => {
      const cardCat = card.getAttribute("data-category");
      if (category === "All" || cardCat === category) {
        card.style.display = ""; // Show
        // Optional: Add simple fade in without reflow hack if needed, or just let it appear
        card.style.animation = "fadeInUp 0.5s ease forwards";
      } else {
        card.style.display = "none"; // Hide
      }
    });
  }

  // === Load Admin Added Designs ===
  const designGrid = document.querySelector(".design-grid");
  const adminDesigns = JSON.parse(localStorage.getItem("adminGalleryItems_v4")) || [];

  adminDesigns.forEach(design => {
    // Create card element
    const card = document.createElement("div");
    card.className = "design-card";

    // SMART AUTO-CATEGORIZATION
    // Since Admin panel has no Category input, we guess based on the Name.
    let targetCategory = "Abstract"; // Default fallback
    const lowerName = (design.name || "").toLowerCase();

    if (lowerName.match(/flower|rose|leaf|bloom|garden|nature|floral/)) {
      targetCategory = "Floral";
    } else if (lowerName.match(/simple|white|black|line|minimal|clean/)) {
      targetCategory = "Minimalist";
    } else if (lowerName.match(/anime|manga|goku|naruto|jujutsu|demon/)) {
      targetCategory = "Anime";
    } else if (lowerName.match(/pattern|rug|mandala|culture|desi|traditional/)) {
      targetCategory = "Traditional";
    } else if (lowerName.match(/batman|superman|marvel|dc|hero|spider|avenger/)) {
      targetCategory = "Superhero";
    } else if (lowerName.match(/abstract|neon|wave|cyber|tech/)) {
      targetCategory = "Abstract";
    }

    card.setAttribute("data-category", targetCategory);

    // Fallback image if missing
    const imgSrc = design.image || "images/placeholder.jpg";

    card.innerHTML = `
      <img src="${imgSrc}" alt="${design.name}">
      <h3>${design.name}</h3>
      <p>Premium admin-selected design.</p>
      <p class="price">Rs. ${parseFloat(design.price).toFixed(2)}</p>
      <button class="order-btn" onclick="orderDesign('${design.name}', '${design.price}', '${imgSrc}')">Order This Design</button>
    `;

    // Append to grid
    designGrid.appendChild(card);
  });

  // === Fade-in animation for design cards ===
  const cards = document.querySelectorAll(".design-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));

  // === Add hover glow effect dynamically ===
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 10px 25px rgba(30, 64, 175, 0.3)";
      card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
      card.style.transform = "translateY(0)";
    });
  });
});

// === Handle order button click ===
// === Handle order button click ===
function orderDesign(name, price, image) {
  // Save selected design to localStorage
  const orderDetails = {
    name: name,
    price: price,
    image: image
  };
  localStorage.setItem("selectedOrder", JSON.stringify(orderDetails));

  // Redirect to the correct user order page (frontend path)
  window.location.href = "pages/user/order.html";
}
