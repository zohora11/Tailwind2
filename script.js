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

// JavaScript to open the image in a modal on button click
const buttons = document.querySelectorAll('.group button'); // Get all buttons
const modal = document.getElementById('imageModal'); // Get modal element
const modalImage = document.getElementById('modalImage'); // Get the modal image
const closeModal = document.getElementById('closeModal'); // Get close button

// Loop through all the buttons
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Find the image associated with the clicked button
    const img = button.closest('.group').querySelector('img');
    modalImage.src = img.src; // Set the modal image source to the clicked image's source
    modal.classList.remove('hidden'); // Show the modal by removing the 'hidden' class
  });
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', function() {
  modal.classList.add('hidden'); // Hide the modal by adding the 'hidden' class again
});




/*
<div class="">
          <img src="img/1.jpg" class="w-full">
        </div>
        <div class="">
          <img src="img/2.jpg" class="w-full">
        </div>
        <div class="sm:row-span-2">
          <img src="img/3.jpg" class="w-full">
        </div>
      
        <!-- 2nd Row -->
        <div class="sm:row-span-2">
          <img src="img/4.jpg" class="w-full">
        </div>
        <div class="">
          <img src="img/5.jpg" class="w-full">
        </div>
        
      
        <!-- 3rd Row -->
        <div class=" sm:col-span-2 sm:row-span-2">
          <img src="img/7.jpg" class="w-full">
        </div>
      
        <!-- 4th Row -->
        <div class="">
          <img src="img/6.jpg" class="w-full ">
        </div>
*/