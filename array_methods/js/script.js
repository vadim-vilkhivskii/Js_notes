'use strict';

//FILTER
//создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemar'];

// const shortNames = names.filter(function(name) {
//     if(name.length < 5){
//         return name;
//     }
// });

// console.log(shortNames);


// MAP
// Метод map вызывает переданную функцию callback один раз для каждого элемента,
// в порядке их появления и конструирует новый массив из результатов её вызова. 

// const answer = ['IvAn', 'AnnA', 'Hello'];

// const result = answer.map(item => item.toLocaleLowerCase());
// console.log(result);


//every/some
//some - возвращает логическое значение, если хотя бы один элемент масива подходит под условие
//every - возвращает логическое значение, если все элементы масива подходят под условие
// const some = [4, 'sda', 'sdfasdf'];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));

//reduce

// const arr = [4, 5, 1, 2, 6];

// const result = arr.reduce((sum, current) => sum + current);
// const arr = ['apple', 'pear', 'plum'];

// const result = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result);

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0])
// console.log(newArr);



const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
};

const getTotalIncomeAmount = (data) => data.some(item => item.amount<0) ? data.reduce((acc, obj) => acc + obj.amount, 0) : getPositiveIncomeAmount(data);
    // if(data.some(item => item.amount < 0)){
    //     return data.reduce((acc, obj) => {
    //         acc += obj.amount;
    //     }, 0);
    // } else {
    //     getPositiveIncomeAmount(data);
    // }


console.log(getTotalIncomeAmount(funds));
