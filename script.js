let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slides");
    const indicators = document.querySelectorAll(".indicators span");

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slider.style.transform = `translateX(${-slideIndex * 100}%)`;

    indicators.forEach((indicator, index) => {
        if (index === slideIndex) {
            indicator.classList.add("active");
        } else {
            indicator.classList.remove("active");
        }
    });
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

function createIndicators() {
    const slides = document.querySelectorAll(".slide");
    const indicatorsContainer = document.querySelector(".indicators");

    slides.forEach((slide, index) => {
        const indicator = document.createElement("span");
        indicator.addEventListener("click", () => {
            slideIndex = index;
            showSlides();
        });
        indicatorsContainer.appendChild(indicator);
    });

    if (indicatorsContainer.firstChild) {
        indicatorsContainer.firstChild.classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", createIndicators);

showSlides();