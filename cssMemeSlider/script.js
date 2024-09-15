let currentSlide = 0;

function showSlide(index,btn1) {
    const slides = document.querySelector('.slides');
    currentSlide = index;
    const offset = -currentSlide * 100; // Вычислить смещение слайдов
    slides.style.transform = `translateX(${offset}%)`; // Переместить слайды
deleteActive(btn1);
}
document.addEventListener("DOMContentLoaded", function() {
  const btns = document.querySelectorAll('.button');
  btns.forEach((btn,index) => {
    btn.addEventListener('click',  () => showSlide(index,btn));
});
});
function deleteActive(btn1)
{
  const btns = document.querySelectorAll('.button');
  btns.forEach((btn,index) => {
    btn.classList.remove('active');
});
btn1.classList.add('active');
}