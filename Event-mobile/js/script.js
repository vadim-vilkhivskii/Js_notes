'use strict';
/* События на мобилках
touchstart - касание к элементу
touchmove - движение по элементу
touchend - когда палец оторвался от элемента 
touchenter - срабатывает когда палец при движении наскальзывает на элемент
touchleave - когда палец ушел с элемента при движении 
touchcancel - когда точка соприкосновения не регистрируеться на поверхности */

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });
});

//touches - свойство объекта события - выдает список всех пальцев которые сейчас взаимодействуют с экраном 
//targetTouches - все пальцы которые взаимодействуют с элементом
//changedTouches - список пальцев которые учавствуют в текущем событии 