let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    currentSlide = index;
    const offset = -currentSlide * 100; // Вычислить смещение слайдов
    slides.style.transform = `translateX(${offset}%)`; // Переместить слайды
}
document.addEventListener("DOMContentLoaded", function() {
  const btns = document.querySelectorAll('.btn');
console.log(btns);
  btns.forEach((btn,index) => {
    btn.addEventListener('click',  () => showSlide(index));
});
});