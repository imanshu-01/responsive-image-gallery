const galleryItems = document.querySelectorAll(".image-box img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;

// Show clicked image in lightbox
galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showLightbox(img.src);
  });
});

function showLightbox(src) {
  lightboxImg.src = src;
  lightbox.style.display = "flex";
  lightbox.style.animation = "fadeIn 0.5s ease";
}

function closeLightbox() {
  lightbox.style.display = "none";
}

// Navigate next
function nextImage() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
}

// Navigate previous
function prevImage() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
}

// Filter gallery images by category
function filterImages(category) {
  const boxes = document.querySelectorAll('.image-box');
  boxes.forEach(box => {
    box.style.display = (category === 'all' || box.classList.contains(category)) ? 'block' : 'none';
  });

  // Update active button state
  const buttons = document.querySelectorAll('.filters button');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Use a safe fallback for `event.target`
  const clickedButton = [...buttons].find(btn =>
    btn.textContent.toLowerCase() === category.toLowerCase()
  );
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}
