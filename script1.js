// Initialize slider
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;  // Set initial slide index

// Function to update the slider position
function moveSlider() {
  const totalItems = document.querySelectorAll('.slider-item').length;
  const itemWidth = slider.querySelector('.slider-item').offsetWidth;  // Get the width of one slide
  const shiftAmount = currentIndex * itemWidth;  // Calculate how much to shift the slides

  // Move the slider by updating the transform property
  slider.style.transform = `translateX(-${shiftAmount}px)`;
}

// Function to update active dots
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('bg-white');  // Active dot
      dot.classList.remove('bg-black');
    } else {
      dot.classList.add('bg-black');  // Inactive dot
      dot.classList.remove('bg-white');
    }
  });
}

// Event listeners for dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;  // Set current index to the clicked dot
    moveSlider();
    updateDots();
  });
});

// Auto-slide functionality (optional)
setInterval(() => {
  currentIndex = (currentIndex + 1) % 3;  // Loop back to the first slide after the last
  moveSlider();
  updateDots();
}, 5000); // Change slide every 5 seconds

// Initial setup
moveSlider();
updateDots();
