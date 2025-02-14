let currentSlide = 0;
const images = ["images/image1.png", "images/image2.png", "images/image3.png","images/image4.png", "images/image5.png", "images/image6.png"]; // Add paths to your images

const slideElement = document.getElementById("slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function showSlide(index) {
    if (index < 0) {
        currentSlide = images.length - 1;
    } else if (index >= images.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slideElement.src = images[currentSlide];
}

prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

// Initially show the first slide
showSlide(currentSlide);
