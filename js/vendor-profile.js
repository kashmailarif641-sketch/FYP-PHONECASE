document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("profileForm");
  const imageInput = document.getElementById("profileImage");
  const previewImage = document.getElementById("profilePreview");

  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const address = document.getElementById("address");
  const city = document.getElementById("city");
  const country = document.getElementById("country");
  const password = document.getElementById("password");

  /* ===============================
     Load Saved Data (if exists)
  =============================== */
  const savedProfile = JSON.parse(localStorage.getItem("vendorProfile"));

  if (savedProfile) {
    fullName.value = savedProfile.fullName || "";
    email.value = savedProfile.email || "";
    phone.value = savedProfile.phone || "";
    address.value = savedProfile.address || "";
    city.value = savedProfile.city || "";
    country.value = savedProfile.country || "";
    previewImage.src = savedProfile.image || previewImage.src;
  }

  /* ===============================
     Profile Image Preview
  =============================== */
  imageInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        previewImage.src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  });

  /* ===============================
     Save Profile Data
  =============================== */
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic Validation
    if (
      fullName.value.trim() === "" ||
      email.value.trim() === "" ||
      phone.value.trim() === "" ||
      address.value.trim() === "" ||
      city.value.trim() === "" ||
      country.value.trim() === ""
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const profileData = {
      fullName: fullName.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      address: address.value.trim(),
      city: city.value.trim(),
      country: country.value.trim(),
      image: previewImage.src
    };

    // Save to Local Storage
    localStorage.setItem("vendorProfile", JSON.stringify(profileData));

    // Optional password clear after save
    password.value = "";

    alert("Profile updated successfully!");
  });

});
