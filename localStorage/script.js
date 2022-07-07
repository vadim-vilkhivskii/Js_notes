'use strict';

// localStorage.setItem('num', 6);// установка значения в localStorage

// localStorage.removeItem('num');// удаление элемента

// localStorage.getItem('num');// получение значения элемента

// localStorage.clear();// очистка всего 


const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed'){
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {

    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Vadim',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('vadim', serializedPersone);
console.log(JSON.parse(localStorage.getItem('vadim')));
