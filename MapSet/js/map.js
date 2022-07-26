//! Map
//! Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

//! Методы и свойства:

//! new Map() – создаёт коллекцию.
//! map.set(key, value) – записывает по ключу key значение value.
//! map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
//! map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
//! map.delete(key) – удаляет элемент по ключу key.
//! map.clear() – очищает коллекцию от всех элементов.
//! map.size – возвращает текущее количество элементов.

const obj = {
    name: 'Vadim',
    age: 26,
    job: 'fullstack'
}

const entries = [     //*представление объекта в ввиде масива
    ['name', 'Vadim'],
    ['age', 26],
    ['job', 'fullstack']
]
// console.log(Object.entries(obj)); //* метод позволяющий преобразить объект в ввиде масива
// console.log(Object.fromEntries(entries));//* получение объекта из масива 

//! MAP

const map = new Map(entries)

// console.log(map.get('job')); //* get позволяет получить доступ до полей структуры MAP

map
    .set('newField', 42) //* set добавляет новые поля, ключами могут являться любые знчения
    .set(obj , 'Value of object') 
    .set(NaN, 'NaN ??')

// console.log(map.get(NaN));

// map.delete('job') //* удаляет поле и возвращает true or false в зависимости от результата 
// console.log(map.has('job')); //* has проверяет есть ли указаное поле и возвращает true or false

// console.log(map.size); //* возвращает количество ключей в Map

// map.clear() //* очищает всю структуру

//========

//! Перебор Map
//! Для перебора коллекции Map есть 3 метода:

//! map.keys() – возвращает итерируемый объект по ключам,
//! map.values() – возвращает итерируемый объект по значениям,
//! map.entries() – возвращает итерируемый объект по парам вида [ключ, значение],
//! этот вариант используется по умолчанию в for..of.

// for(let [key, value] of map) {
//     console.log(key, value);
// }

// for (let val of map.values()){ //* получаем только значения
//     console.log(val);
// }

// for (let key of map.keys()){ //* получаем список всех ключей 
//     console.log(key);
// }

// map.forEach((val, key, m) => { 
//     console.log(val, key);
// })

//===========

// const array = [...map]  //* получем масив из значений карты
// const arr = Array.from(map) //* аналогично

// const mapObj = Object.fromEntries(map)

// console.log(mapObj);

//============

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'},
]
//* создаем карту ключами которой являються объекты с пользователями и в значения заносим время "поcещения"
const visits = new Map() 

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

    function lastVisit(user) {
        return visits.get(user)
    }
    console.log(lastVisit(users[1]));