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
