const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideIndex = 0;
const slides = slider.querySelectorAll("img");
const numSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        index = numSlides - 1;
    } else if (index >= numSlides) {
        index = 0;
    }
    slider.style.transform = `translateX(${-index * 100}%)`;
    slideIndex = index;
}

prevBtn.addEventListener("click", () => {
    showSlide(slideIndex - 1);
});

nextBtn.addEventListener("click", () => {
    showSlide(slideIndex + 1);
});

showSlide(slideIndex);
