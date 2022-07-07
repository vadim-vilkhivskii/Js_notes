'use strict';

//* new RegExp('pttern', 'flags');
//* /pattern/flags


// const ans = prompt('Введите число');

// const reg = /\d/g;

// console.log(ans.match(reg)); //* возвращает булиан если в строке есть заданый шаблон


const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));


//!Классы RegExp
//*  \d  - поиск цифр
//*  \w  - поиск всех букв
//*  \s  - поиск всех пробелов

//! Обратные классы
//*  \D  - не числа
//*  \W  - не буквы
//*  \S  - поиск всех пробелов


//! Флаги
//* i - если хотим найти независимо от регистра 
//* g - если пытаемся найти сразу несколько вхождений
//* m - включает многострочный режим

// console.log(ans.search(reg));//*ищет первую букву n
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, "*"));//* поиск в строке и замена 

// console.log('12-34-56'.replace(/-/g, ':'));




