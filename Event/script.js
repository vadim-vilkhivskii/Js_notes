const btns = document.querySelectorAll('button'),    // находим элемент через селектор
    overlay = document.querySelector('.overlay');


// btn.onclick = function() {    // Функция обработки события по клику на элемент
//     alert('CLIIIICK');
// }


// btn.addEventListener('click', () => {   // .addEventListener добавляем обработчик события, первый аргумент название
//     alert('CLIIIICK');                  //события ('click'). второй арг кол-бек функция которая будет обрабатывать 
// });                                     //преимущества - можно назначать неск действий на одно событие, которое
//                                         //выполняеться по очереди 


// btn.addEventListener('click', (e) => { //объект-событие передаеться как аргумент в кол-бек функцию, название любое
//     console.log(e.target);             //через (e.target) получаем элемент и можем с ним взаимодействовать
//     e.target.remove();                 //удаляем элемент после события клик 
// });


// let i = 0;

const deleteElement = (e) => {
    console.log(e.currentTarget); //currentTarget используется что бы предотвратить всплытия события
    console.log(e.type);        //e.type событие которое произошло 

    // i++;
    // if(i == 1){
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement); //после события клик будет вызвана функция deleteElement
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement)
});


const link = document.querySelector('a'); //находим элемент по тегу <а>

link.addEventListener('click', (event) => {
    event.preventDefault(); //метод(reventDefault()) у обыекта события(event) отменяет стандартное поведение браузера 

    console.log(event.target);
});



