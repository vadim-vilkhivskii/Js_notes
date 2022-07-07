'use strict';
//контекст вызова функции - this, то что окружает функцию и в каких условиях она вызывается 


//функция может вызываться 4 способами и в каждом контекст отличаеться 


//1. Просто вызов. Обычная функция this = window, но если use strict - undefined

function showThis(a, b) {  //в обычном вызове this ссылаеться на глобальный объект Window
    console.log(this);//а в строгом режиме undefined

    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
// showThis(4, 5);

//2. Методы объектов. Если мы используем метод внутри объекта то контекст вызова this ссылаеться на этот объект
//Коттекст у методов объекта - сам объект

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//     }
// };
// obj.sum();

//3. Функции конструкторы и классы
//this в конструкторах и классах - это новый экземпляр объекта

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}
let vadim = new User('Vadim', 23);

//4. Ручное присвоение this любой функции: call, apply, bind
//

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'Vadim'
// };

// sayName.call(user, ' Vilkhivskiy');//Ручное присвоение котекста функции если .call то арг пердаються через запятую
// sayName.apply(user, [' Vilkhivskiy']);//если .apply то аргументы передаються в масиве 

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);

// console.log(double(3));

const btn = document.querySelector('button');
//в обработчику событий написаному в класическом режиме в кол бек функции  контекст вызова будет сам элемент
//на котором произошло событие (event.target)
//если в обраюотчик передавать стрелочную функцию то контекст вызова использовать нельзя
btn.addEventListener('click', function(){
    console.log(this);
});

//в стрелочной функции нет своего контекста вызова, она берет его у своего родителя 
const obj = {
    num: 5,
    sayNumber: function(){
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};
obj.sayNumber();


