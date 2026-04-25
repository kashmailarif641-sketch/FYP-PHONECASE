// ===== order.js =====
document.addEventListener("DOMContentLoaded", () => {
    // 1. Load Data from LocalStorage
    const studioImage = localStorage.getItem("designImage");
    const studioBrand = localStorage.getItem("selectedBrand");
    const studioModel = localStorage.getItem("selectedModel");
    const studioBasePrice = parseInt(localStorage.getItem("basePrice")) || 1300;

    let orderData = JSON.parse(localStorage.getItem("selectedOrder")) || {};

    // 2. Setup Display
    const previewImg = document.getElementById("orderDesignImg");
    const heading = document.querySelector(".design-preview h2");
    const brandDisplay = document.getElementById("displayBrand");
    const modelDisplay = document.getElementById("displayModel");
    const totalPriceDisplay = document.getElementById("totalPriceDisplay");

    if (studioImage && previewImg) previewImg.src = studioImage;
    if (heading) heading.textContent = `Order: ${orderData.name || "Custom Case"}`;
    if (brandDisplay) brandDisplay.textContent = studioBrand || "Generic";
    if (modelDisplay) modelDisplay.textContent = studioModel || "Device";

    // 3. Price Calculation Logic
    const materialSelect = document.getElementById("material");
    const paymentSelect = document.getElementById("paymentMethodSelect");
    const digitalDetails = document.getElementById("digitalPaymentDetails");
    const paymentAmountSpan = document.getElementById("paymentAmount");

    function calculateTotal() {
        let extra = 0;
        const mat = materialSelect ? materialSelect.value : "";

        if (mat === "Premium") extra = 300;
        else if (mat === "Transparent") extra = 200;
        else if (mat === "Matte") extra = 150;
        else if (mat === "Glossy") extra = 150;

        const total = studioBasePrice + extra;

        // Update both displays
        if (totalPriceDisplay) totalPriceDisplay.textContent = `Rs. ${total}`;
        if (paymentAmountSpan) paymentAmountSpan.textContent = "Rs. " + total;

        return total;
    }

    if (materialSelect) {
        materialSelect.addEventListener("change", calculateTotal);
    }
    calculateTotal(); // Initial calculation

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

    // 4. Payment Toggle
    if (paymentSelect && digitalDetails) {
        paymentSelect.addEventListener("change", (e) => {
            digitalDetails.style.display = e.target.value === "jazzcash" ? "block" : "none";
            calculateTotal();
        });
    }

    // 5. Confirm Order
    const confirmBtn = document.getElementById("confirmOrderBtn");
    if (confirmBtn) {
        confirmBtn.addEventListener("click", confirmOrder);
    }

    function confirmOrder() {
        const brand = localStorage.getItem("selectedBrand");
        const model = localStorage.getItem("selectedModel");
        const material = document.getElementById("material").value;

        const totalPrice = calculateTotal(); // Grabs actual total price safely

        const fullName = document.querySelector('input[placeholder="Enter your full name"]').value;
        const address = document.querySelector('textarea').value;
        const phone = document.querySelector('input[type="tel"]').value;

        const isPremium = document.getElementById("premiumDesign").checked;
        const premiumPrice = document.getElementById("premiumPrice").value;

        const paymentMethod = document.getElementById("paymentMethodSelect").value;
        const trxIdInput = document.getElementById("trxId");
        const trxId = trxIdInput ? trxIdInput.value : null;

        // Basic validation so order doesn't fail
        if (!fullName || !address || !phone || !material || !paymentMethod) {
            alert("Please complete all delivery details.");
            return;
        }

        const user = JSON.parse(localStorage.getItem("user"));
        const designImage = localStorage.getItem("designPreview");

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
                // Save Order ID
                if (data.order && data.order._id) {
                    localStorage.setItem("orderId", data.order._id);
                }

                // Keep the minimal required info for payment-confirmation.html
                const confirmedOrder = {
                    name: fullName,
                    price: totalPrice,
                    payment: {
                        mode: paymentMethod,
                        trxId: trxId
                    }
                };
                localStorage.setItem("confirmedOrder", JSON.stringify(confirmedOrder));

                // Clear auto-saved design because order placed successfully
                localStorage.removeItem("savedDesign");

                // Direct redirect (no alert)
                window.location.href = "payment-confirmation.html";
            })
            .catch(err => {
                console.log(err);
                alert("Error saving order");
            });
    }
});
