// Complete model list for each brand
const brandModels = {
  iphone: [
    { name: "iPhone 6", img: "../../images/iphone 6.png" },
    { name: "iPhone 6s", img: "../../images/iphone 6s.jpg" },
    { name: "iPhone 7", img: "../../images/iphone7.jpg" },
    { name: "iPhone 8", img: "../../images/iphone8.jpg" },
    { name: "iPhone X", img: "../../images/iphoneX.avif" },
    { name: "iPhone XR", img: "../../images/iphone Xr.jpg" },
    { name: "iPhone XS", img: "../../images/iphoneX.avif" },
    { name: "iPhone 11", img: "../../images/iphone 11 11.png" },
    { name: "iPhone 12", img: "../../images/ip12.png" },
    { name: "iPhone 13", img: "../../images/ip 13.png" },
    { name: "iPhone 14", img: "../../images/ip 14.png" },
    { name: "iPhone 14 Pro", img: "../../images/ip14pro.png" }
  ],
  samsung: [
    { name: "Galaxy S8", img: "../../images/galaxy s8.png" },
    { name: "Galaxy S9", img: "../../images/galaxy s9.png" },
    { name: "Galaxy S10", img: "../../images/galaxy s10.png" },
    { name: "Galaxy S20", img: "../../images/galaxy s20.png" },
    { name: "Galaxy S21", img: "../../images/galaxy s21.png" },
    { name: "Galaxy S22", img: "../../images/galaxy s22.png" },
    { name: "Galaxy S23", img: "../../images/galaxy s23.png" },
    { name: "Galaxy Note 9", img: "../../images/galaxy note9.png" },
    { name: "Galaxy Note 10", img: "../../images/galaxy note 10.png" },
    { name: "Galaxy Note 20", img: "../../images/galaxy note 20.png" },
    { name: "Galaxy A50", img: "../../images/galaxy A50.png" },
    { name: "Galaxy A54", img: "../../images/galaxy a54.png" },
    { name: "Galaxy M33", img: "../../images/galaxy m33.png" }
  ],
  oneplus: [
    { name: "OnePlus 6", img: "../../images/oneplus6.png" },
    { name: "OnePlus 6T", img: "../../images/oneplus6T.png" },
    { name: "OnePlus 7", img: "../../images/oneplus7.png" },
    { name: "OnePlus 7 Pro", img: "../../images/oneplus7pro.png" },
    { name: "OnePlus 8", img: "../../images/oneplus8.png" },
    { name: "OnePlus 8 Pro", img: "../../images/oneplus 8pro.png" },
    { name: "OnePlus 9", img: "../../images/oneplus 9.png" },
    { name: "OnePlus 9 Pro", img: "../../images/oneplus 9pro.png" },
    { name: "OnePlus 10 Pro", img: "../../images/oneplus 10 pro.png" },
    { name: "OnePlus 11", img: "../../images/oneplus 11.png" }
  ],
  xiaomi: [
    { name: "Mi 9", img: "../../images/brand-xiaomi.jpg" },
    { name: "Mi 10", img: "../../images/brand-xiaomi.jpg" },
    { name: "Mi 11", img: "../../images/brand-xiaomi.jpg" },
    { name: "Mi 12", img: "../../images/brand-xiaomi.jpg" },
    { name: "Mi 13", img: "../../images/brand-xiaomi.jpg" },
    { name: "Redmi Note 9", img: "../../images/brand-xiaomi.jpg" },
    { name: "Redmi Note 10", img: "../../images/brand-xiaomi.jpg" },
    { name: "Redmi Note 11", img: "../../images/brand-xiaomi.jpg" },
    { name: "Redmi Note 12", img: "../../images/brand-xiaomi.jpg" },
    { name: "Redmi Note 13", img: "../../images/brand-xiaomi.jpg" },
    { name: "Poco X3", img: "../../images/brand-xiaomi.jpg" },
    { name: "Poco X5", img: "../../images/brand-xiaomi.jpg" }
  ],
  oppo: [
    { name: "Oppo F17", img: "../../images/oppof17.png" },
    { name: "Oppo F19", img: "../../images/oppof19.png" },
    { name: "Oppo F21", img: "../../images/oppo f21.png" },
    { name: "Oppo A53", img: "../../images/oppoA53.png" },
    { name: "Oppo A74", img: "../../images/oppo a74.png" },
    { name: "Oppo A78", img: "../../images/oppoA78.png" },
    { name: "Oppo Reno5", img: "../../images/oppo reno5.png" },
    { name: "Oppo Reno10", img: "../../images/oppo reno10.png" }
  ],
  vivo: [
    { name: "Vivo V20", img: "../../images/brand-vivo.jpg" },
    { name: "Vivo V21", img: "../../images/brand-vivo.jpg" },
    { name: "Vivo V23", img: "../../images/brand-vivo.jpg" },
    { name: "Vivo V25", img: "../../images/brand-vivo.jpg" },
    { name: "Vivo V27", img: "../../images/brand-vivo.jpg" },
    { name: "Vivo Y20", img: "../../images/brand-vivo.jpg" },
    { name: "Vivo Y100", img: "../../images/brand-vivo.jpg" },
    { name: "Vivo X90", img: "../../images/brand-vivo.jpg" }
  ],
  huawei: [
    { name: "P30", img: "../../images/brand-huawei.jpg" },
    { name: "P40", img: "../../images/brand-huawei.jpg" },
    { name: "P50", img: "../../images/brand-huawei.jpg" },
    { name: "P60", img: "../../images/brand-huawei.jpg" },
    { name: "P60 Pro", img: "../../images/brand-huawei.jpg" },
    { name: "Mate 30", img: "../../images/brand-huawei.jpg" },
    { name: "Mate 40", img: "../../images/brand-huawei.jpg" },
    { name: "Mate 50", img: "../../images/brand-huawei.jpg" },
    { name: "Nova 7", img: "../../images/brand-huawei.jpg" },
    { name: "Nova 10", img: "../../images/brand-huawei.jpg" },
    { name: "Nova 11", img: "../../images/brand-huawei.jpg" }
  ],
  realme: [
    { name: "Realme 7", img: "../../images/brand-realme.jpg" },
    { name: "Realme 8", img: "../../images/brand-realme.jpg" },
    { name: "Realme 9", img: "../../images/brand-realme.jpg" },
    { name: "Realme 10", img: "../../images/brand-realme.jpg" },
    { name: "Realme 11", img: "../../images/brand-realme.jpg" },
    { name: "Realme 12 Pro", img: "../../images/brand-realme.jpg" },
    { name: "Realme GT 3", img: "../../images/brand-realme.jpg" }
  ],
  tecno: [
    { name: "Tecno Camon 17", img: "../../images/brand-tecno.jpg" },
    { name: "Tecno Camon 19", img: "../../images/brand-tecno.jpg" },
    { name: "Tecno Camon 21", img: "../../images/brand-tecno.jpg" },
    { name: "Tecno Spark 7", img: "../../images/brand-tecno.jpg" },
    { name: "Tecno Spark 10", img: "../../images/brand-tecno.jpg" },
    { name: "Tecno Phantom X", img: "../../images/brand-tecno.jpg" }
  ],
  infinix: [
    { name: "Infinix Hot 10", img: "../../images/infinix logo.jpg" },
    { name: "Infinix Hot 12", img: "../../images/infinix logo.jpg" },
    { name: "Infinix Hot 30", img: "../../images/infinix logo.jpg" },
    { name: "Infinix Note 10", img: "../../images/infinix logo.jpg" },
    { name: "Infinix Note 12", img: "../../images/infinix logo.jpg" },
    { name: "Infinix Note 13", img: "../../images/infinix logo.jpg" },
    { name: "Infinix Zero 30", img: "../../images/infinix logo.jpg" }
  ],
  googlepixel: [
    { name: "Pixel 5", img: "../../images/pixel logo.jpg" },
    { name: "Pixel 6", img: "../../images/pixel logo.jpg" },
    { name: "Pixel 6 Pro", img: "../../images/pixel logo.jpg" },
    { name: "Pixel 7", img: "../../images/pixel logo.jpg" },
    { name: "Pixel 7a", img: "../../images/pixel logo.jpg" },
    { name: "Pixel 8", img: "../../images/pixel logo.jpg" },
    { name: "Pixel 8 Pro", img: "../../images/pixel logo.jpg" }
  ],
  motorola: [
    { name: "Moto G71", img: "../../images/motrola logo.jpg" },
    { name: "Moto G73", img: "../../images/motrola logo.jpg" },
    { name: "Moto Edge 30", img: "../../images/motrola logo.jpg" },
    { name: "Moto Edge 40", img: "../../images/motrola logo.jpg" },
    { name: "Moto X30", img: "../../images/motrola logo.jpg" },
    { name: "Moto X40", img: "../../images/motrola logo.jpg" }
  ]
};

// Merge Admin Added Models from LocalStorage
const storedModels = JSON.parse(localStorage.getItem("phoneModels")) || [];
storedModels.forEach(model => {
  const brandKey = model.brand.toLowerCase();
  if (brandModels[brandKey]) {
    brandModels[brandKey].push({
      name: model.name,
      img: model.img,
      basePrice: model.basePrice,   // Use these custom properties we added
      customPrice: model.customPrice
    });
  } else {
    // If brand doesn't exist in defaults, create it (optional, but good for flexibility)
    // Note: The UI only lists specific brands, so they might not be clickable unless we also dynamically add brands to the list. 
    // For now, assuming admin picks from the select box which matches keys.
    brandModels[brandKey] = [{
      name: model.name,
      img: model.img,
      basePrice: model.basePrice,
      customPrice: model.customPrice
    }];
  }
});

const brandContainer = document.getElementById("brand-container");
const modelContainer = document.getElementById("model-container");
const nextBtn = document.getElementById("next-btn");

// safety: if elements are not present, don't run handlers (prevents runtime errors)
if (!brandContainer || !modelContainer || !nextBtn) {
  console.warn('Model selection: required DOM elements missing, aborting script.');
}

// Brand click
brandContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const selectedBrand = e.target.getAttribute("data-brand");

    // Highlight selected brand
    Array.from(brandContainer.children).forEach(li => li.classList.remove("active"));
    e.target.classList.add("active");

    // Load models
    const models = brandModels[selectedBrand] || [];
    modelContainer.innerHTML = ""; // Clear previous models

    // default fallback price (Rs.) if a model.price isn't provided
    // helper: deterministic price generator based on model name (used when prices not provided)
    const nf = new Intl.NumberFormat('en-US');
    function generatePrices(name) {
      let seed = 0;
      for (let i = 0; i < name.length; i++) seed += name.charCodeAt(i) * (i + 1);
      // base between 899 and 1499
      const base = 899 + (seed % 601); // 899..1499
      // custom is base + 200..600
      const custom = base + 200 + (seed % 401); // base+200 .. base+600
      return { base: nf.format(base), custom: nf.format(custom) };
    }

    models.forEach(model => {
      const li = document.createElement("li");
      li.classList.add("model-item");
      // determine prices (support per-model basePrice and customPrice)
      let basePrice, customPrice;
      if (model.basePrice || model.customPrice) {
        basePrice = model.basePrice || model.price || "1,199";
        customPrice = model.customPrice || model.price || "1,499";
      } else {
        const p = generatePrices(model.name || model.img || Math.random().toString());
        basePrice = p.base;
        customPrice = p.custom;
      }
      // attach price data attributes for later use
      li.dataset.basePrice = basePrice;
      li.dataset.customPrice = customPrice;
      li.innerHTML = `
        <img src="${model.img}" alt="${model.name}" class="model-img" />
        <span class="model-name">${model.name}</span>
        <div class="model-prices">
          <div class="model-price-base">Base: Rs. ${basePrice}</div>
          <div class="model-price-custom">Custom: Rs. ${customPrice}</div>
        </div>
      `;
      modelContainer.appendChild(li);
    });

    // Disable continue button
    nextBtn.disabled = true;
  }
});

// Model click
modelContainer.addEventListener("click", (e) => {
  const li = e.target.closest("li.model-item");
  if (!li) return;

  Array.from(modelContainer.children).forEach(item => item.classList.remove("active"));
  li.classList.add("active");

  // Enable Continue button
  nextBtn.disabled = false;
});

// Continue button click
nextBtn.addEventListener("click", () => {
  const selectedBrand = document.querySelector("#brand-container .active").getAttribute("data-brand");
  const selectedModel = document.querySelector("#model-container .active span").textContent;

  console.log("Selected Brand:", selectedBrand);
  console.log("Selected Model:", selectedModel);

  // ✅ Redirect to design studio page
  window.location.href = "design-studio.html";
});
