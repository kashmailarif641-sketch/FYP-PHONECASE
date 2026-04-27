// ===== order.js =====
document.addEventListener("DOMContentLoaded", () => {
    // 1. Brand & Model Data
    const brandModels = {
        iphone: {
            "iPhone 6 Series": ["iPhone 6", "iPhone 6s"],
            "iPhone 7 Series": ["iPhone 7", "iPhone 7 Plus"],
            "iPhone 8 Series": ["iPhone 8", "iPhone 8 Plus"],
            "iPhone X Series": ["iPhone X", "iPhone XR", "iPhone XS", "iPhone XS Max"],
            "iPhone 11 Series": ["iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max"],
            "iPhone 12 Series": ["iPhone 12", "iPhone 12 Mini", "iPhone 12 Pro", "iPhone 12 Pro Max"],
            "iPhone 13 Series": ["iPhone 13", "iPhone 13 Mini", "iPhone 13 Pro", "iPhone 13 Pro Max"],
            "iPhone 14 Series": ["iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max"],
            "iPhone 15 Series": ["iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"],
            "iPhone 16 Series": ["iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max"],
            "iPhone 17 Series": ["iPhone 17", "iPhone 17 Plus", "iPhone 17 Pro", "iPhone 17 Pro Max"]
        },
        samsung: {
            "Galaxy S Series": ["Galaxy S20", "Galaxy S20 Plus", "Galaxy S20 Ultra", "Galaxy S21", "Galaxy S21 Plus", "Galaxy S21 Ultra", "Galaxy S22", "Galaxy S22 Plus", "Galaxy S22 Ultra", "Galaxy S23", "Galaxy S23 Plus", "Galaxy S23 Ultra", "Galaxy S24", "Galaxy S24 Plus", "Galaxy S24 Ultra"],
            "Galaxy A Series": ["Galaxy A52", "Galaxy A54", "Galaxy A73"],
            "Galaxy Note Series": ["Galaxy Note 10", "Galaxy Note 20 Ultra"]
        },
        xiaomi: ["Redmi Note 10", "Redmi Note 11", "Redmi Note 12", "Redmi Note 13", "Xiaomi 11", "Xiaomi 12", "Xiaomi 13", "Xiaomi 14"],
        oppo: ["Oppo F17", "Oppo F19", "Oppo F21 Pro", "Oppo Reno 6", "Oppo Reno 7", "Oppo Reno 8", "Oppo Reno 10", "Oppo Find X3", "Oppo Find X5"],
        vivo: ["Vivo V20", "Vivo V21", "Vivo V23", "Vivo V27", "Vivo V29", "Vivo X60", "Vivo X70", "Vivo X80", "Vivo X90"],
        huawei: ["Huawei P30", "Huawei P40", "Huawei P50", "Huawei Mate 30", "Huawei Mate 40", "Huawei Nova 9"],
        realme: ["Realme 8", "Realme 9", "Realme 10", "Realme GT", "Realme GT 2", "Realme C55"],
        tecno: ["Tecno Spark 10", "Tecno Spark 20", "Tecno Camon 18", "Tecno Camon 20"],
        infinix: ["Infinix Note 10", "Infinix Note 12", "Infinix Note 30", "Infinix Zero 20"],
        googlepixel: ["Pixel 6", "Pixel 6 Pro", "Pixel 7", "Pixel 7 Pro", "Pixel 8", "Pixel 8 Pro"],
        motorola: ["Moto G60", "Moto G73", "Moto Edge 30", "Moto Edge 40"],
        oneplus: ["OnePlus 8", "OnePlus 8 Pro", "OnePlus 9", "OnePlus 9 Pro", "OnePlus 10 Pro", "OnePlus 11", "OnePlus 12"]
    };

    // 2. Determine Navigation Source
    const orderSource = localStorage.getItem("orderSource");
    const selectedDesign = JSON.parse(localStorage.getItem("selectedOrderDesign"));
    
    // UI Elements
    const brandModelDisplay = document.getElementById("brandModelDisplay");
    const deviceDropdownContainer = document.getElementById("deviceDropdownContainer");
    const selectedBrandField = document.getElementById("selectedBrand");
    const selectedModelField = document.getElementById("selectedModel");
    const brandSelect = document.getElementById("brandSelect");
    const modelSelect = document.getElementById("modelSelect");

    // Clear potentially stale brand/model if coming from gallery
    if (orderSource === "premium-gallery") {
        localStorage.removeItem("selectedBrand");
        localStorage.removeItem("selectedModel");
    }

    const studioImage = (orderSource === "premium-gallery" && selectedDesign) ? selectedDesign.image : localStorage.getItem("designImage");
    const studioBrand = localStorage.getItem("selectedBrand");
    const studioModel = localStorage.getItem("selectedModel");

    // 3. Logic based on Source
    if (orderSource === "design-studio") {
        // STRICT STUDIO FLOW: Show static text, hide dropdowns
        if (brandModelDisplay) brandModelDisplay.style.display = "flex";
        if (deviceDropdownContainer) deviceDropdownContainer.style.display = "none";
        
        if (selectedBrandField) selectedBrandField.textContent = studioBrand || "Not Selected";
        if (selectedModelField) selectedModelField.textContent = studioModel || "Not Selected";

    } else if (orderSource === "premium-gallery") {
        // STRICT GALLERY FLOW: Show dropdowns, hide static display
        if (deviceDropdownContainer) deviceDropdownContainer.style.display = "flex";
        if (brandModelDisplay) brandModelDisplay.style.display = "none";

        if (selectedBrandField) selectedBrandField.textContent = "";
        if (selectedModelField) selectedModelField.textContent = "";

        // Populate Brands for dropdown
        brandSelect.innerHTML = '<option value="">Select Brand</option>';
        Object.keys(brandModels).forEach(brand => {
            const option = document.createElement("option");
            option.value = brand;
            option.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
            brandSelect.appendChild(option);
        });

        // Handle Brand Change
        brandSelect.addEventListener("change", function() {
            const brand = this.value;
            modelSelect.innerHTML = '<option value="">Select Model</option>';
            if (!brand) return;

            const models = brandModels[brand];
            if (Array.isArray(models)) {
                models.forEach(model => {
                    const option = document.createElement("option");
                    option.value = model;
                    option.textContent = model;
                    modelSelect.appendChild(option);
                });
            } else {
                Object.keys(models).forEach(category => {
                    const optgroup = document.createElement("optgroup");
                    optgroup.label = category;
                    models[category].forEach(model => {
                        const option = document.createElement("option");
                        option.value = model;
                        option.textContent = model;
                        optgroup.appendChild(option);
                    });
                    modelSelect.appendChild(optgroup);
                });
            }
            localStorage.setItem("selectedBrand", brand);
        });

        // Handle Model Change
        modelSelect.addEventListener("change", function() {
            localStorage.setItem("selectedModel", this.value);
        });

    } else {
        // Fallback for direct access
        if (brandModelDisplay) brandModelDisplay.style.display = "flex";
        if (selectedBrandField) selectedBrandField.textContent = "Generic";
        if (selectedModelField) selectedModelField.textContent = "Device";
    }

    // Determine Price
    const studioBasePrice = (orderSource === "premium-gallery" && selectedDesign) ? parseInt(selectedDesign.price) : (parseInt(localStorage.getItem("basePrice")) || 1300);

    // 4. Setup Design Preview (DO NOT MODIFY OR RE-RENDER THIS SECTION)
    const previewImg = document.getElementById("orderDesignImg");
    const heading = document.querySelector(".design-preview h2");
    
    // Load the image ONCE and never change it
    if (studioImage && previewImg) {
        previewImg.src = studioImage;
    }
    if (heading) {
        heading.textContent = `Order: ${selectedDesign ? selectedDesign.name : "Custom Case"}`;
    }

    // 5. Price Calculation Logic
    const materialSelect = document.getElementById("material");
    const paymentSelect = document.getElementById("paymentMethodSelect");
    const digitalDetails = document.getElementById("digitalPaymentDetails");
    const paymentAmountSpan = document.getElementById("paymentAmount");
    const totalPriceDisplay = document.getElementById("totalPriceDisplay");

    function calculateTotal() {
        let extra = 0;
        const mat = materialSelect ? materialSelect.value : "";

        if (mat === "Premium") extra = 300;
        else if (mat === "Transparent") extra = 200;
        else if (mat === "Matte") extra = 150;
        else if (mat === "Glossy") extra = 150;

        const total = studioBasePrice + extra;

        if (totalPriceDisplay) totalPriceDisplay.textContent = `Rs. ${total}`;
        if (paymentAmountSpan) paymentAmountSpan.textContent = "Rs. " + total;

        return total;
    }

    if (materialSelect) {
        materialSelect.addEventListener("change", calculateTotal);
    }
    calculateTotal(); 

    // Toggle Premium Price Box
    const premiumCheckbox = document.getElementById("premiumDesign");
    const premiumBox = document.getElementById("premiumPriceBox");

    if (premiumCheckbox && premiumBox) {
        premiumCheckbox.addEventListener("change", function () {
            if (this.checked) {
                const user = JSON.parse(localStorage.getItem("user"));
                if (!user || !user.jazzcashNumber) {
                    alert("Please add JazzCash number in profile first");
                    this.checked = false;
                    window.location.href = "user-profile.html";
                    return;
                }
                premiumBox.style.display = "block";
            } else {
                premiumBox.style.display = "none";
                document.getElementById("premiumPrice").value = "";
            }
        });
    }

    // Payment Toggle
    if (paymentSelect && digitalDetails) {
        paymentSelect.addEventListener("change", (e) => {
            digitalDetails.style.display = e.target.value === "jazzcash" ? "block" : "none";
            calculateTotal();
        });
    }

    // 6. Confirm Order
    const confirmBtn = document.getElementById("confirmOrderBtn");
    if (confirmBtn) {
        confirmBtn.addEventListener("click", confirmOrder);
    }

    function confirmOrder() {
        let brand, model;
        if (orderSource === "premium-gallery") {
            brand = brandSelect.value;
            model = modelSelect.value;
        } else {
            brand = studioBrand;
            model = studioModel;
        }

        const material = document.getElementById("material").value;
        const totalPrice = calculateTotal();

        const fullName = document.querySelector('input[placeholder="Enter your full name"]').value;
        const address = document.querySelector('textarea').value;
        const phone = document.querySelector('input[type="tel"]').value;

        const isPremium = document.getElementById("premiumDesign").checked;
        const premiumPrice = document.getElementById("premiumPrice").value;

        const paymentMethod = document.getElementById("paymentMethodSelect").value;
        const trxIdInput = document.getElementById("trxId");
        const trxId = trxIdInput ? trxIdInput.value : null;

        if (!fullName || !address || !phone || !material || !paymentMethod || !brand || !model) {
            alert("Please complete all delivery details including brand and model.");
            return;
        }

        const user = JSON.parse(localStorage.getItem("user"));
        const designImage = studioImage || localStorage.getItem("designPreview");

        const orderData = {
            userId: user._id,
            brand,
            model,
            material,
            totalPrice,
            fullName,
            address,
            phone,
            designImage: designImage,
            isPremium,
            premiumPrice,
            premiumStatus: isPremium ? "pending" : null,
            payment: {
                mode: paymentMethod,
                trxId: trxId
            }
        };

        fetch("http://localhost:5000/api/orders/place-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.order && data.order._id) {
                localStorage.setItem("orderId", data.order._id);
            }
            const confirmedOrder = {
                name: fullName,
                price: totalPrice,
                payment: {
                    mode: paymentMethod,
                    trxId: trxId
                }
            };
            localStorage.setItem("confirmedOrder", JSON.stringify(confirmedOrder));
            localStorage.removeItem(`savedDesign_${user._id}`);
            localStorage.removeItem("selectedOrderDesign");
            window.location.href = "payment-confirmation.html";
        })
        .catch(err => {
            console.log(err);
            alert("Error saving order");
        });
    }
});
