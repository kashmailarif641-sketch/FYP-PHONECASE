/* ===== Navigation helpers ===== */
function goToDashboard() {
  window.location.href = "pages/user/user-dashboard.html";
}

function goToSignup() {
  window.location.href = "signup.html";
}

/* ===== Attach events after DOM loads ===== */
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startDesigningBtn");
  const heroBtn = document.getElementById("getStartedBtn");

  if (startBtn) startBtn.addEventListener("click", goToDashboard);
  if (heroBtn) heroBtn.addEventListener("click", goToSignup);

  // ===== Mobile nav toggle =====
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // ===== Hide Navbar on Scroll =====
  const header = document.querySelector(".site-header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 60) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
    lastScroll = currentScroll;
  });

  // ===== Swiper Slider Initialization =====
  const mainSwiperEl = document.querySelector('.mySwiper');
  if (mainSwiperEl) {
    new Swiper(mainSwiperEl, {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        480: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  // Initialize custom cases swiper only if element exists
  const customCasesEl = document.querySelector('.customCasesSwiper');
  if (customCasesEl) {
    new Swiper(customCasesEl, {
      slidesPerView: 4,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
      }
    });
  }

});
