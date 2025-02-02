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