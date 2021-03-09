"use strict";

const sliderBtns = document.querySelectorAll(".main-slider-buttons button");
const slides = document.querySelectorAll(".slide-item");

const resetActiveSlides = () => {
  slides.forEach((item) => {
    item.classList.remove("slide-active");
  });
  sliderBtns.forEach((item) => {
    item.classList.remove("slide-button-active");
  });
};

sliderBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    resetActiveSlides();
    slides[i].classList.add("slide-active");
    btn.classList.add("slide-button-active");
  });
});