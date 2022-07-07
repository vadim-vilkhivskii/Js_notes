const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);// выводит количество класов элемента

// console.log(btns[0].classList.item(0));// получает класс который располагаетсья под определенным индексом

// console.log(btns[1].classList.add('red')); // добавляет класс к элементу, можно добавить несколько через запятую

// console.log(btns[0].classList.remove('blue')); // удаляет класс 

// console.log(btns[0].classList.toggle('blue'));// если есть данный класс то удаяет его, если его нет до добавляет 

// if(btns[1].classList.contains('red')){ // проверяет существование класа и возвращает булиновое значение 
//     console.log('red');
// }


btns[0].addEventListener('click', () => {
    if(btns[1].classList.contains('red')){
        btns[1].classList.remove('red');
    } else {
        btns[1].classList.add('red');
    }
});

//Делигирование события -
//хадаем события на все элементы в родителе 
wrapper.addEventListener('click', (e) => { //задаем событие на родителя и через объект события проверяем попали ли мы
if(e.target && e.target.tagName == "BUTTON"){ //проверка точно ли попали на кнопку через свойство tagName
    // if(e.target && e.target.classList.contains('blue')){// алтернативная проверка через класы дочерних элементов
    console.log('hello');
}
});

const btn = document.createElement('button'); // создаем элементт button, он динамический и существ пока только в js

btn.classList.add('red');// добавляем ему класс red
wrapper.append(btn); //и добавляем элем на страницу в конец этого родителя