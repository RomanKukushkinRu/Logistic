

// Menu


$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__menu1, .header__menu2, .header__menu3, .header__navigation').toggleClass('active')
        $('body').toggleClass('lock')
    });
});



// Modal Window 
   //   Переменные для первого модального окна
   //  Находим нужные элементы - кнопки для открытия, модальное окно, кнопка для закрытия

const button01 = document.querySelector('[data-modal-button01]');
const button02 = document.querySelector('[data-modal-button02]');
const button03 = document.querySelector('[data-modal-button03]');

    
const modal1 = document.querySelector('[data-modal_1]');
const buttonClose01 = document.querySelector('[data-modal-close01]');


//Переменные для второго модального окна
const button04 = document.querySelector('[data-modal-button04]');


const modal2 = document.querySelector('[data-modal_2]');
const buttonClose02 = document.querySelector('[data-modal-close02]')


const Body = document.querySelector('body'); // Требуется для отключения скролла при открытом модальном окне.


// Прослушиваем клик на кнопках открытия и Открываем первое модальное окно

button01.addEventListener('click', function (){
    modal1.classList.remove('hidden'); 
    Body.classList.add('lock'); //Добавляет класс lock к тегу body, который ограничивает скролл
})

button02.addEventListener('click', function(){
    modal1.classList.remove('hidden');
    Body.classList.add('lock'); //Добавляет класс lock к тегу body, который ограничивает скролл
})

button03.addEventListener('click', function(){
    modal1.classList.remove('hidden');
    Body.classList.add('lock'); //Добавляет класс lock к тегу body, который ограничивает скролл
})

// Прослушиваем клик на кнопках открытия и Открываем второе модальное окно.

button04.addEventListener('click', function(){
    modal2.classList.remove('hidden');
    Body.classList.add('lock');
    GetCallbackInput01.value='';
    GetCallbackInput02.value='';
    GetCallbackInput03.value='';
})

// Открываем второе модальное окно при скрытии первого по нажатию по кнопке в первом модальном окне.

const button05 = document.querySelector('[data-modal-open-close01]');

button05.addEventListener('click', function(){
    modal1.classList.add('hidden'); 
    modal2.classList.remove('hidden');
})



// Прослушиваем клик на кнопке закрытия и Закрываем первое модальное окно
buttonClose01.addEventListener('click', function (){
    modal1.classList.add('hidden');
    Body.classList.remove('lock'); //Удаляет класс lock к тегу body, который ограничивает скролл
} )

// Прослушиваем клик на кнопке закрытия и Закрываем второе модальное окно

buttonClose02.addEventListener('click', function(){
    modal2.classList.add('hidden');
    Body.classList.remove('lock');
})




//ЗАКРЫТИЕ ПО КЛИКУ НА ФОН - Прослушиваем клик на закрытие по первому модальному окну, чтобы дальше отключить закрытие по телу модалки(останется отключение по фону)
modal1.addEventListener('click', function (){
    modal1.classList.add('hidden');
    Body.classList.remove('lock'); //Удаляет класс lock к тегу body, который ограничивает скролл
})


modal2.addEventListener('click', function (){
    modal2.classList.add('hidden');
    Body.classList.remove('lock'); //Удаляет класс lock к тегу body, который ограничивает скролл
})

// ЗАКРЫТИЕ оба МОДАЛЬНОГО ОКНА ПО ФОНУ.
// Поиск элемента, на котором не будет срабатывать событие клика.
//  (Нам не требуется срабатывание по клику на модальное окно).
// Ищем элемент(соседний от того, на котором будет срабатывать клик)
// Вешаем на событие метод СтопПропогэйшн. Этот метод говорит нам, что мы останавливаем передачу события наверх.(Мы не хотим, чтобы родиетли этого блока знали, что это событие произошло.)


modal1.querySelector('.modal__wrapper').addEventListener('click', function(event){
    event.stopPropagation();
})

modal2.querySelector('.modal__wrapper').addEventListener('click', function(event){
    event.stopPropagation();
})



// Взаимодействие с Placeholder'ами форм ввода данных. ФОРМА В НАЧАЛЕ СТРАНИЦЫ.


const GetCallbackInput01 = document.querySelector('.intro_line_js01');
const GetCallbackInput02 = document.querySelector('.intro_line_js02');
const GetCallbackInput03 = document.querySelector('.intro_line_js03');

GetCallbackInput01.addEventListener('focus', function(){
    this.removeAttribute('placeholder');
})

GetCallbackInput01.addEventListener('blur', function(){
    this.setAttribute('placeholder' , 'Your name');
})

GetCallbackInput02.addEventListener('focus', function(){
    this.removeAttribute('placeholder');
})

GetCallbackInput02.addEventListener('blur', function(){
    this.setAttribute('placeholder' , 'Your phone');
})

GetCallbackInput03.addEventListener('focus', function(){
    this.removeAttribute('placeholder');
})

GetCallbackInput03.addEventListener('blur', function(){
    this.setAttribute('placeholder' , 'Your e-mail');
})


// Взаимодействие с Placeholder'ами форм ввода данных. ФОРМА В МОДАЛЬНОМ ОКНЕ №1.

const GetCallbackInput04 = document.querySelector('.intro_line_js04');
const GetCallbackInput05 = document.querySelector('.intro_line_js05');
const GetCallbackInput06 = document.querySelector('.intro_line_js06');

GetCallbackInput04.addEventListener('focus', function(){
    this.removeAttribute('placeholder');
})
 
GetCallbackInput04.addEventListener('blur', function(){
    this.setAttribute('placeholder', 'Your name');
})

GetCallbackInput05.addEventListener('focus', function(){
    this.removeAttribute('placeholder');
})
 
GetCallbackInput05.addEventListener('blur', function(){
    this.setAttribute('placeholder', 'Your phone');
})

GetCallbackInput06.addEventListener('focus', function(){
    this.removeAttribute('placeholder');
})
 
GetCallbackInput06.addEventListener('blur', function(){
    this.setAttribute('placeholder', 'Your e-mail');
})


















// InputPlaceholder.forEach(element => {

//     element.addEventListener('focus', function(e){
//     e.removeAttribute('placeholder');
//  })
// })