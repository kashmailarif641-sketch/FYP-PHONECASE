document.addEventListener("DOMContentLoaded", () => {

  // Grab elements
  const profilePic = document.getElementById("profilePic");
  const uploadInput = document.getElementById("uploadPic");
  const saveBtn = document.querySelector(".save-btn");
  const cancelBtn = document.querySelector(".cancel-btn");

  const nameInput = document.querySelector('input[type="text"]');
  const emailInput = document.querySelector('input[type="email"]');
  const phoneInput = document.querySelector('input[type="text"]:nth-of-type(2)');
  const addressInput = document.querySelector('textarea');

  // Load saved profile if exists
  const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
  if (savedProfile) {
    profilePic.src = savedProfile.photo || "../../images/default-profile.png";
    nameInput.value = savedProfile.name || "";
    emailInput.value = savedProfile.email || "";
    phoneInput.value = savedProfile.phone || "";
    addressInput.value = savedProfile.address || "";
  }

  // ===== Upload Photo =====
  uploadInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      profilePic.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });

  // ===== Save Changes =====
  saveBtn.addEventListener("click", () => {
    const profileData = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      address: addressInput.value,
      photo: profilePic.src
    };

    localStorage.setItem("userProfile", JSON.stringify(profileData));
    alert("Profile saved successfully!");
  });

  // ===== Cancel Changes =====
  cancelBtn.addEventListener("click", () => {
    if (savedProfile) {
      profilePic.src = savedProfile.photo || "../../images/default-profile.png";
      nameInput.value = savedProfile.name || "";
      emailInput.value = savedProfile.email || "";
      phoneInput.value = savedProfile.phone || "";
      addressInput.value = savedProfile.address || "";
    } else {
      // Reset to defaults
      profilePic.src = "../../images/default-profile.png";
      nameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";
      addressInput.value = "";
    }
  });

});
