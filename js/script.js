let modalBg = document.querySelector('.modal'); // Фон модального вікна
let modal = document.querySelector('.modal-wrapper') // Модальне вікно
let btnOpenModalWindow = document.querySelector('.hero-btn') // Кнопка для відкриття модального вікна
let btnCloseModalWindow = document.querySelector('.modal-closed-btn') // Кнопка закриття модального вікна

let btnOpenMobileMenu = document.querySelector('.mobile-open-btn') // Кнопка відкриття мобільного меню
let windowMobileMenu = document.querySelector('.mobile-menu-wrap') // Вікно меню для мобільного телефону
let btnCloseMobileMenu = document.querySelector('.menu-close-btn') // Кнопка закриття  мобільного меню


btnOpenModalWindow.addEventListener('click', (e) => {
    e.preventDefault();
    modalBg.classList.add('is-open');
    modal.classList.add('is-open');
})

btnCloseModalWindow.addEventListener('click', () => {
    modalBg.classList.remove('is-open');
    modal.classList.remove('is-open');
})

document.addEventListener('click', (e) => {
    if(e.target === modalBg) {
        modalBg.classList.remove('is-open')
        modal.classList.remove('is-open')
    }
})

btnOpenMobileMenu.addEventListener('click', (e) => {
    e.preventDefault();
    windowMobileMenu.classList.add('is-open')
})

btnCloseMobileMenu.addEventListener('click', (e) => {
    e.preventDefault();
    windowMobileMenu.classList.remove('is-open')
})
