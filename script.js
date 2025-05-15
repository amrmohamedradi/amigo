// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});

// Initialize Leaflet Map
const map = L.map('map').setView([30.044419981891, 31.235948615443], 15);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker for the store location
const storeMarker = L.marker([30.044419981891, 31.235948615443]).addTo(map);
storeMarker.bindPopup("<b>AMIGO Store</b><br>El-Qanater El-Khayreya, Qalyubia, Egypt").openPopup();

// Add background color to navbar on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Language switching functionality
document
  .querySelector(".language-toggle")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const currentSection = getCurrentSection();
    const targetUrl =
      "index-ar.html" + (currentSection ? `#${currentSection}` : "");
    window.location.href = targetUrl;
  });

// Function to get current section
function getCurrentSection() {
  const sections = document.querySelectorAll("section[id]");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  return currentSection;
}

// Handle initial scroll to section if hash is present
window.addEventListener("load", function () {
  if (window.location.hash) {
    const targetSection = document.querySelector(window.location.hash);
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
}); 