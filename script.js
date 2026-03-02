
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Swiper !== 'undefined') {
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const eduBtn = document.getElementById("edu-btn");
  const eduMenu = document.getElementById("edu-menu");
  const marathiBtn = document.getElementById("marathi-btn");
  const marathiMenu = document.getElementById("marathi-menu");

  // Main menu toggle
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Education menu toggle
  if (eduBtn && eduMenu) {
    // ensure submenu hidden by default
    if (!eduMenu.classList.contains('hidden')) eduMenu.classList.add('hidden');
    eduBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      eduMenu.classList.toggle("hidden");
      const arrow = eduBtn.querySelector("i");
      if (arrow) {
        arrow.style.transform = eduMenu.classList.contains("hidden") ? "rotate(0deg)" : "rotate(-180deg)";
        arrow.style.transition = "transform 0.3s ease";
      }
    });
  }

  // Marathi menu toggle
  if (marathiBtn && marathiMenu) {
    if (!marathiMenu.classList.contains('hidden')) marathiMenu.classList.add('hidden');
    marathiBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      marathiMenu.classList.toggle("hidden");
      const arrow = marathiBtn.querySelector("i");
      if (arrow) {
        arrow.style.transform = marathiMenu.classList.contains("hidden") ? "rotate(0deg)" : "rotate(-180deg)";
        arrow.style.transition = "transform 0.3s ease";
      }
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (menuBtn && mobileMenu && !menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add("hidden");
    }
  });
});
