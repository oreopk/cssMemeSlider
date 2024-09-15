let currentSlide = 0;

function showSlide(index,btn1) {
    const slides = document.querySelector('.slides');
    currentSlide = index;
    const offset = -currentSlide * 100; // Вычислить смещение слайдов
    slides.style.transform = `translateX(${offset}%)`; // Переместить слайды
Active(btn1);
ActiveSub(index);
}
document.addEventListener("DOMContentLoaded", function() {
  const subs = document.querySelectorAll('.sub');
  subs.forEach((sub,index) => {
    sub.classList.add('disabled');
    sub.classList.remove('active');
});
subs[0].classList.add('active');
subs[0].classList.add('disabled');

  const btns = document.querySelectorAll('.button');
  btns.forEach((btn,index) => {
    btn.addEventListener('click',  () => showSlide(index,btn));
});
showSlide(0,btns[0]);
});
function Active(btn1)
{
  const btns = document.querySelectorAll('.button');
  btns.forEach((btn,index) => {
    btn.classList.remove('active');
});
btn1.classList.add('active');
}
function ActiveSub(index)
{
  const subs = document.querySelectorAll('.sub');
  subs.forEach((sub,index) => {
    sub.classList.add('disabled');
    sub.classList.remove('active');
});
subs[index].classList.add('active');
subs[index].classList.add('disabled');
}