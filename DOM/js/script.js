'use strict';

const box = document.getElementById('box'); // Получить элемент по айди
const btn = document.getElementsByTagName('button'); // Получить все элементы по тегу в псевдомасив
const circles = document.getElementsByClassName('circle'); // Получить элементы по классу в псевдомасив
const hearts = document.querySelectorAll('.heart'); // Получить элементы по CSS селектору в псевдомасив, forEach+
const oneHeart = document.querySelector('.heart'); // Получить первый элемент по по селектору
const wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btn[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';



// for(let i = 0; i< hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue'
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});


const div = document.createElement('div'); //создает єлемент с тегом див


// const text = document.createTextNode('HelloWorld')

div.classList.add('black');

// document.body.append(div); // добавляет элемент в конец блока боди
wrapper.append(div); // добавляет элемент в конец блока wrapper
// wrapper.appendChild(div); //// добавляет элемент в конец блока wrapper(устаревшая версия)
// wrapper.prepend(div); // добавляет элемент в начало блока wrapper

// hearts[2].before(div); // добавляет элемент перед блоком hearts

// circles[0].remove(); //удаляет первый элемент circles
// wrapper.removeChild(hearts[1]); //удаляет второй элемент hearts,у родителя wrapper

// hearts[0].replaceWith(circles[0]);  //замена элемента одного другим 

// wrapper.replaceChild(circles[0], hearts[0]);   //замена элемента одного другим 

div.innerHTML = '<h1>Hello world</h1>'; //вставка в элемент текста или другого элемента 

// div.textContent = 'Hello'; // вставка в элемнт только текста

div.insertAdjacentHTML("", '<h2>Hello</h2>'); //вставка кода перед, после, в начало, в конец элемента