'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

// const width = box.clientWidth;//получаем ширину элемента без учота полосы прокрутки 
// const height = box.clientHeight;//получаем висоту элемента без учота скрола 
// const width = box.offsetWidth;//получаем ширину элемента с учотом полосы прокрутки 
// const height = box.offsetHeight;//получаем высоту элемента видимой части с учотом полосы прокрутки 
const width = box.scrollWidth;////получаем ширину элемента без учота полосы прокрутки  
const height = box.scrollHeight;//получаем шивысотурину элемента с учотом всего контента скрола 

btn.addEventListener('click', () => {
    // box.style.height = `${height}px`;//изменяем высоту бокса с учотом всего контента
    console.log(box.scrollTop);
    window.scrollBy(0, 400);
});

console.log(box.getBoundingClientRect().top);// получает все кординаты на странице

const style = window.getComputedStyle(box);// window.getComputedStyle() возвращает объект со всеми стилями элемента
console.log(style.display);

console.log(document.documentElement.scrollTop);//возвращает сколько пикселей мі пролистали на странице, можно мод
window.scrollBy(0, 400);// позволяет скролить от текущей позиции 
window.scrollTo(0, 400);// позволяет отскролить относительно всей страницы





