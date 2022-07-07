'use strict';

// function User(name, id){//функция конструктор создает новые обыекты при вызове с переданными параметрами 
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function(name){//через свойство prototype можно добавлять новые свойства в конструкторы
//     console.log(`Пользователь ${this.name} ушел`);
// }

// const ivan = new User('Vadim', 28);//создание нового экземпляра через оператор new
// const alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.hello();
// alex.hello();

// class Rectnangle {  //создаем новый класс
//     constructor(height, width) {//функция конструктор, в нее прописываем аргументы который будем 
//         this.height = height;   // передавать и создаем новые свойства
//         this.width = width;
//     }

//     cavlcArea() {   //метод будет доступен у каждого єкземпляра класса
//         return this.height * this.width;
//     }
// }

// //через extends указываем что новый класс будет наследовать все свойства класса Rectnangle
// class ColoredRectnangleText extends Rectnangle{
//     constructor(height, width, text, bgColor){
//         super(height, width); //вызывает суперконструктор родителя, а хначит не нужно повторять строки
//                               //в аргументі передаем свойства которые мы хотим использовать, если не нужны все 
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyPromps(){
//         console.log(`Текст ${this.text}, цвет: ${this.bgColor}`);
//     }

// }

// const div = new ColoredRectnangleText(25, 10, 'Hello world', 'red');

// div.showMyPromps();
// console.log(div.cavlcArea());

// const square = new Rectnangle(10, 10);
// const long = new Rectnangle(20, 100);

// console.log(square.cavlcArea());
// console.log(long.cavlcArea());


// 
class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Vilkhivskiy';
    get surname(){
        return this.#surname;
    }
    set surname(sur) {
        this.#surname = sur;
    }

    say() {
        console.log(`Имя пользователя: ${this.name}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const vadim = new User('Vadim', 23);



console.log(vadim.surname);
vadim.surname('blskll');
console.log(vadim.surname);

vadim.age = 99;


vadim.say();