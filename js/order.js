// ===== order.js =====
document.addEventListener("DOMContentLoaded", () => {
    // 1. Load Selected Design Data
    const orderData = JSON.parse(localStorage.getItem("selectedOrder"));

    if (orderData) {
        // Update Preview
        const previewImg = document.querySelector(".preview-box img");
        const heading = document.querySelector(".design-preview h2");
        // We'll add a price element dynamically or update if exists

        if (previewImg) {
            // Fix path if it is relative to root (starts with 'images/')
            // order.html is in pages/user/, so it needs header ../../
            let imgPath = orderData.image;
            if (imgPath && imgPath.startsWith("images/")) {
                imgPath = "../../" + imgPath;
            }
            previewImg.src = imgPath;
        }
        if (heading) heading.textContent = `Selected: ${orderData.name}`;

        // Add or Update Price Display
        let priceDisplay = document.querySelector(".order-price-display");
        if (!priceDisplay) {
            priceDisplay = document.createElement("div");
            priceDisplay.className = "order-price-display";
            priceDisplay.style.fontSize = "1.2rem";
            priceDisplay.style.fontWeight = "bold";
            priceDisplay.style.marginTop = "10px";
            priceDisplay.style.color = "#333";
            document.querySelector(".preview-box").appendChild(priceDisplay);
        }
        priceDisplay.textContent = `Price: Rs. ${orderData.price}`;
    }

    // 2. Populate Brand & Model Dropdowns
    const brandSelect = document.getElementById("brandSelect");
    const modelSelect = document.getElementById("modelSelect");

    // Copying data locally to ensure independence (or could export/import if modular)
    const brandModels = {
        iphone: [
            { name: "iPhone 6", img: "../../images/iphone 6s.jpg" },
            { name: "iPhone 6s", img: "../../images/iphone 6s.jpg" },
            { name: "iPhone 7", img: "../../images/iphone7.jpg" },
            { name: "iPhone 8", img: "../../images/iphone8.jpg" },
            { name: "iPhone X", img: "../../images/iphoneX.avif" },
            { name: "iPhone XR", img: "../../images/iphone Xr.jpg" },
            { name: "iPhone XS", img: "../../images/iphoneX.avif" },
            { name: "iPhone 11", img: "../../images/ip 11.png" },
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

    // Populate Brand Dropdown
    if (brandSelect && modelSelect) {
        Object.keys(brandModels).forEach(brand => {
            const option = document.createElement("option");
            option.value = brand;
            option.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
            brandSelect.appendChild(option);
        });

        // Handle Brand Change
        brandSelect.addEventListener("change", (e) => {
            const selectedBrand = e.target.value;
            modelSelect.innerHTML = '<option disabled selected>Select Model</option>'; // Reset models

            if (brandModels[selectedBrand]) {
                brandModels[selectedBrand].forEach(model => {
                    const option = document.createElement("option");
                    option.value = model.name;
                    option.textContent = model.name;
                    modelSelect.appendChild(option);
                });
            }
        });
    }

    // 3. Payment Method Logic (Toggle Details)
    const paymentSelect = document.getElementById("paymentMethodSelect");
    const digitalDetails = document.getElementById("digitalPaymentDetails");
    const paymentAmountSpan = document.getElementById("paymentAmount");

    if (paymentSelect && digitalDetails) {
        paymentSelect.addEventListener("change", (e) => {
            const method = e.target.value;
            if (method === "jazzcash") {
                digitalDetails.style.display = "block";
                if (orderData && orderData.price) {
                    paymentAmountSpan.textContent = "Rs. " + orderData.price;
                }
            } else {
                digitalDetails.style.display = "none";
            }
        });
    }



    // 4. Confirm Order Logic
    const confirmBtn = document.getElementById("confirmOrderBtn");

    if (confirmBtn) {
        confirmBtn.addEventListener("click", () => {
            // Basic Validation
            const name = document.querySelector('input[placeholder="Enter your full name"]').value;
            const address = document.querySelector('textarea').value;
            const phone = document.querySelector('input[type="tel"]').value;
            const paymentMode = paymentSelect ? paymentSelect.value : "";
            const trxId = document.getElementById("trxId").value;

            if (!name || !address || !phone) {
                alert("Please fill in all delivery details.");
                return;
            }
            if (modelSelect && modelSelect.value.includes("Select")) {
                alert("Please select a valid phone model.");
                return;
            }
            if (paymentMode === "Select payment method" || !paymentMode) {
                alert("Please select a payment method.");
                return;
            }
            if (paymentMode === "jazzcash" && !trxId) {
                alert("Please enter the Transaction ID for verification.");
                return;
            }

            // Save Confirmed Order
            const confirmedOrder = {
                design: orderData,
                userDetails: { name, address, phone },
                payment: {
                    mode: paymentMode,
                    trxId: paymentMode === "jazzcash" ? trxId : null,
                    status: paymentMode === "jazzcash" ? "Pending Verification" : "Pending COD"
                },
                date: new Date().toISOString()
            };

            localStorage.setItem("confirmedOrder", JSON.stringify(confirmedOrder));

            // Redirect to Confirmation
            window.location.href = "payment-confirmation.html";
        });
    }

});
