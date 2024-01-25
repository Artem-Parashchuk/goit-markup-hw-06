let modalBg = document.querySelector('.modal'); // Фон модального вікна
let modal = document.querySelector('.modal-wrapper') // Модальне вікно
let btnOpenModalWindow = document.querySelector('.hero-btn') // Кнопка для відкриття модального вікна
let btnCloseModalWindow = document.querySelector('.modal-closed-btn') // Кнопка закриття модального вікна

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