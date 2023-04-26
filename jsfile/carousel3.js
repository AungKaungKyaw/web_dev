const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide() {
    // Remove active class from all slides and dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        dots[i].classList.remove('active');
    }
    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    // Increment index to show next slide
    index++;
    // Reset index to 0 if it exceeds the number of slides
    if (index === slides.length) {
        index = 0;
    }
    // Run showSlide function every 3 seconds
    setTimeout(showSlide, 3000);
}

showSlide();
