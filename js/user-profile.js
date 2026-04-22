document.addEventListener("DOMContentLoaded", async () => {

  const token =
    localStorage.getItem("token") ||
    sessionStorage.getItem("token");

  if (!token) {
    window.location.href = "../../login.html";
    return;
  }

  const nameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const addressInput = document.getElementById("address");
  const saveBtn = document.querySelector(".save-btn");

  // ===== Load Profile Data =====
  try {
    const response = await fetch("http://localhost:5000/api/me", {
      headers: {
        "Authorization": "Bearer " + token
      }
    });

    const user = await response.json();

    nameInput.value = user.name || "";
    emailInput.value = user.email || "";
    phoneInput.value = user.phone || "";
    addressInput.value = user.address || "";

    const avatarLetter = document.getElementById("avatarLetter");
    const profilePic = document.getElementById("profilePic");

    if (user.profileImage) {
      profilePic.src = "http://localhost:5000/" + user.profileImage;
      profilePic.style.display = "block";
      avatarLetter.style.display = "none";
    } else {
      avatarLetter.textContent = user.name
        ? user.name.charAt(0).toUpperCase()
        : "U";
    }

  } catch (error) {
    console.log(error);
    alert("Failed to load profile");
  }

  // ===== Save Changes =====
  saveBtn.addEventListener("click", async () => {

    try {
      const response = await fetch("http://localhost:5000/api/update-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
          name: nameInput.value,
          phone: phoneInput.value,
          address: addressInput.value
        })
      });

      const data = await response.json();
      alert(data.message);

    } catch (error) {
      console.log(error);
      alert("Server error");
    }

  });

  const modal = document.getElementById("passwordModal");
  const changePasswordBtn = document.querySelector(".change-password-btn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const updatePasswordBtn = document.getElementById("updatePasswordBtn");

  changePasswordBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  updatePasswordBtn.addEventListener("click", async () => {

    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/change-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify({ currentPassword, newPassword })
      });

      const data = await response.json();
      alert(data.message);

      modal.style.display = "none";

    } catch (error) {
      console.log(error);
      alert("Server error");
    }

  });

});