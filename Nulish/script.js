'use strict';

// const box = document.querySelector('.box');

// const newHeight = 100;
// const newWidth = 400;

// function changeParams(elem, h, w) {
//     elem.style.height = `${h}px`;
//     elem.style.width = `${w}px`;
// }

// changeParams(box, newHeight, newWidth);

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('hello');
    }
};
// console.log(options.name);

// delete options.name;
// console.log(options.name);


// let counter = 0;
// for(let key in options){
//     if(typeof(options[key]) === 'object'){
//         for(let j in options[key]){
//             console.log(`Свойство ${j} имеет значение ${options[key][j]}`);
//             counter++;
//         }
//     }else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }
console.log(Object.keys(options).length);
options.makeTest();
let {border, bg} = options.colors;
border = 2;

console.log(border);
console.log(options.colors.border);


