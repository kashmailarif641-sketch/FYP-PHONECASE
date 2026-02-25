console.log("Vendor JS loaded");
document.getElementById("vendorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const fullName = form.fullName.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const shopName = form.shopName.value.trim();
  const city = form.city.value.trim();
  const businessAddress = form.businessAddress.value.trim();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  // Validation Regex Patterns
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{11}$/;

  // Clear previous errors
  document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");

  let isValid = true;

  if (!fullName) {
    document.getElementById("fullNameError").textContent = "Full Name is required";
    isValid = false;
  } else if (!nameRegex.test(fullName)) {
    document.getElementById("fullNameError").textContent = "Full Name should only contain alphabets and spaces";
    isValid = false;
  }

  if (!email) {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address";
    isValid = false;
  }

  if (!phone) {
    document.getElementById("phoneError").textContent = "Phone number is required";
    isValid = false;
  } else if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent = "Phone number must be exactly 11 digits";
    isValid = false;
  }

  if (!shopName) {
    document.getElementById("shopNameError").textContent = "Shop Name is required";
    isValid = false;
  }

  if (!city) {
    document.getElementById("cityError").textContent = "City is required";
    isValid = false;
  } else if (!nameRegex.test(city)) {
    document.getElementById("cityError").textContent = "City should only contain alphabets";
    isValid = false;
  }

  if (!businessAddress) {
    document.getElementById("businessAddressError").textContent = "Business Address is required";
    isValid = false;
  }

  if (!password) {
    document.getElementById("passwordError").textContent = "Password is required";
    isValid = false;
  } else if (password.length < 8) {
    document.getElementById("passwordError").textContent = "Password must be at least 8 characters long";
    isValid = false;
  }

  if (!confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "Please confirm your password";
    isValid = false;
  } else if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
    isValid = false;
  }

  if (!isValid) return;

  console.log("Registration submitting to:", "http://localhost:5000/api/vendor/signup");
  const payload = {
    name: fullName,
    email: email,
    phone: phone,
    shopName: shopName,
    city: city,
    businessAddress: businessAddress,
    password: password
  };
  console.log("Payload:", JSON.stringify(payload));

  fetch("http://localhost:5000/api/vendor/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === "Vendor registered successfully. Waiting for admin approval.") {
        alert(data.message);
        window.location.href = "../../login.html";
      } else {
        // If backend returns an error (e.g., email already exists)
        if (data.message === "Email already exists") {
          document.getElementById("emailError").textContent = data.message;
        } else {
          alert(data.message || "Registration failed");
        }
      }
    })
    .catch(error => {
      console.log(error);
      alert("Server error connecting to backend");
    });
});
