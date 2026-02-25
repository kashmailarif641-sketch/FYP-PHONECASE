function togglePassword(inputId, icon) {
  const passwordInput = document.getElementById(inputId);
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}

document.addEventListener("DOMContentLoaded", function () {

  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = signupForm.name.value.trim();
    const email = signupForm.email.value.trim();
    const phone = signupForm.phone.value.trim();
    const password = signupForm.password.value.trim();
    const confirmPassword = signupForm.confirmPassword.value.trim();

    // Validation Regex Patterns
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{11}$/;

    // Clear previous errors
    document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");

    // Basic validation: All fields filled
    if (!name || !email || !phone || !password || !confirmPassword) {
      if (!name) document.getElementById("nameError").textContent = "Name is required";
      if (!email) document.getElementById("emailError").textContent = "Email is required";
      if (!phone) document.getElementById("phoneError").textContent = "Phone is required";
      if (!password) document.getElementById("passwordError").textContent = "Password is required";
      if (!confirmPassword) document.getElementById("confirmPasswordError").textContent = "Please confirm your password";
      return;
    }

    // Name validation: Only alphabets and spaces
    if (!nameRegex.test(name)) {
      document.getElementById("nameError").textContent = "Name should only contain alphabets and spaces";
      return;
    }

    // Email validation: Standard structure
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address";
      return;
    }

    // Phone validation: Exactly 11 digits
    if (!phoneRegex.test(phone)) {
      document.getElementById("phoneError").textContent = "Phone number must be exactly 11 digits";
      return;
    }

    // Password length validation
    if (password.length < 8) {
      document.getElementById("passwordError").textContent = "Password must be at least 8 characters long";
      return;
    }

    // Confirm Password check
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
      return;
    }

    // 🔥 SEND DATA TO BACKEND
    fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {

        if (data.message === "User Registered Successfully") {
          window.location.href = "login.html";
        } else {
          // If backend returns an error (e.g., email already exists)
          document.getElementById("emailError").textContent = data.message;
        }

      })
      .catch(error => {
        console.log(error);
        alert("Server error");
      });

  });

});
