const carousel = document.getElementById('carousel');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;
const total = carousel.children.length;


function scrollToImage(i) {
  carousel.scrollTo({
    left: i * carousel.clientWidth,
    behavior: 'smooth'
  });
}


nextBtn.addEventListener('click', () => {
  index = (index + 1) % total;
  scrollToImage(index);
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  scrollToImage(index);
});

setInterval(() => {
  index = (index + 1) % total;
  scrollToImage(index);
}, 4000);