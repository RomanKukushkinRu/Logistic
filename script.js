

// Menu


$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__menu1, .header__menu2, .header__menu3, .header__navigation').toggleClass('active')
        $('body').toggleClass('lock')
    });
});



// Modal Window 

//  Находим нужные элементы - кнопки для открытия, модальное окно, кнопка для закрытия

const button01 = document.querySelector('[data-modal-button01]');
const button02 = document.querySelector('[data-modal-button02]');
const button03 = document.querySelector('[data-modal-button03]');

const modal = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');


// Прослушиваем клик на кнопках открытия и Открываем модалку

button01.addEventListener('click', function (){
    modal.classList.remove('hidden'); 
})

button02.addEventListener('click', function(){
    modal.classList.remove('hidden');
})

button03.addEventListener('click', function(){
    modal.classList.remove('hidden');
})


// Прослушиваем клик на кнопке закрытия и Закрываем модалку
buttonClose.addEventListener('click', function (){
    modal.classList.add('hidden');
} )

modal.addEventListener('click', function (){
    modal.classList.add('hidden');
})


// ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПО ФОНУ.
// Поиск элемента, на котором не будет срабатывать событие клика.
//  (Нам не требуется срабатывание по клику на модальное окно).
// Ищем элемент(соседний от того, на котором будет срабатывать клик)
// Вешаем на событие метод СтопПропогэйшн. Этот метод говорит нам, что мы останавливаем передачу события наверх.(Мы не хотим, чтобы родиетли этого блока знали, что это событие произошло.)


modal.querySelector('.modal__wrapper').addEventListener('click', function(event){
    event.stopPropagation();
})