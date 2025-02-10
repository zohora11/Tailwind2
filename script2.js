/*const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0; // Track current index
const imagesToMove = 2; // Number of images to move per button click

// Function to update the slider position based on index
function updateSlider() {
  const totalImages = slider.children.length; // Get total number of images
  const imagesToShow = window.innerWidth < 640 ? 3 : window.innerWidth < 1024 ? 4 : 6; // Responsive images count
  const slideWidth = slider.children[0].clientWidth; // Get the width of a single image
  const offset = -(currentIndex * (100 / imagesToShow)); // Calculate the offset for sliding
  slider.style.transform = `translateX(${offset}%)`; // Apply the translation to slider

  // Update active dot
  dots.forEach((dot) => dot.classList.remove("bg-white", "scale-125"));
  dots[Math.floor(currentIndex / imagesToMove)].classList.add("bg-white", "scale-125");
}

// Event listener for dot buttons
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index * imagesToMove; // Move to the relevant index when a dot is clicked
    updateSlider();
  });
});

// Move slider forward or backward by 2 images
function moveSlider(direction) {
  const totalImages = slider.children.length;
  const imagesToShow = window.innerWidth < 640 ? 3 : window.innerWidth < 1024 ? 4 : 6;
  const maxIndex = totalImages - imagesToShow; // Max index calculation

  if (direction === "next") {
    currentIndex = Math.min(currentIndex + imagesToMove, maxIndex); // Move 2 images forward
  } else if (direction === "prev") {
    currentIndex = Math.max(currentIndex - imagesToMove, 0); // Move 2 images backward
  }

  updateSlider();
}

// Initial setup
updateSlider();

// Optional: Auto move slider every 5 seconds (remove if not needed)
setInterval(() => {
  moveSlider("next");
}, 5000);
*/

const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".dot");

// Add click event listener to each dot
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const slideWidth = slider.children[0].clientWidth;
    const offset = slideWidth * index;

    // Change slider position
    slider.style.transform = `translateX(-${offset}px)`;

    // Update active dot
    dots.forEach((d) => d.classList.remove("bg-white", "scale-125"));
    dot.classList.add("bg-white", "scale-125");
  });
});
