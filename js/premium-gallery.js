const container = document.getElementById("galleryContainer");

fetch("http://localhost:5000/api/premium-gallery")
  .then(res => res.json())
  .then(data => {

    console.log(data);

    container.innerHTML = "";

    data.forEach(design => {

      // ✅ SAFE IMAGE CHECK
      let imageSrc = "";

      if (design.image) {
        // Check if it's base64 or a full URL
        if (design.image.startsWith("data:image") || design.image.startsWith("http")) {
          imageSrc = design.image;
        } else {
          imageSrc = "http://localhost:5000/" + design.image;
        }
      } else {
        imageSrc = "https://via.placeholder.com/150"; // fallback
      }

      container.innerHTML += `
        <div class="card">
          <img src="${imageSrc}" />
          <h3>${design.name || "No Name"}</h3>
          <p style="color:red;">Rs. ${design.price || 0}</p>
          <button onclick="orderDesign('${design.name || "No Name"}', '${design.price || 0}', '${imageSrc}')">Order This Design</button>
        </div>
      `;
    });

  })
  .catch(err => console.error(err));

// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});

// Handle Order
function orderDesign(designName, designPrice, designImage) {
  const design = {
    name: designName,
    price: designPrice,
    image: designImage
  };

  // save selected design
  localStorage.setItem("selectedOrderDesign", JSON.stringify(design));

  // redirect
  window.location.href = "pages/user/order.html";
}
