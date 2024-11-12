document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    // Переключение отображения меню и анимация иконки
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("open");
        menu.classList.toggle("show");
    });

    // Переключение логотипа на главную
    document.querySelector(".logo img").addEventListener("click", () => {
        window.location.href = "/"; // Главная страница
    });
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');

    // Переключаем класс 'show' для меню
    menu.classList.toggle('show');

    // Переключаем класс 'open' для кнопки меню
    menuIcon.classList.toggle('open');
}

/* Функция переключения карточек */
function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = document.querySelector('.carousel-item.active');
    let nextItem = currentItem.nextElementSibling || items[0];
    
    currentItem.classList.remove('active');
    currentItem.classList.add('prev');
    nextItem.classList.add('active');
    nextItem.classList.remove('next');
}

let startX;
const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carouselContainer.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        nextSlide();
    }
});
