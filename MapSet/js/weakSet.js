//! WeakSet
//! Коллекция WeakSet ведёт себя похоже:

//! Она аналогична Set, но мы можем добавлять в WeakSet только объекты (не примитивные значения).
//! Объект присутствует в множестве только до тех пор, пока доступен где-то ещё.
//! Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.
//! Будучи «слабой» версией оригинальной структуры данных, она тоже служит в качестве дополнительного хранилища.
//! Но не для произвольных данных, а скорее для значений типа «да/нет». Присутствие во множестве WeakSet может что-то сказать нам об объекте.

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'},
]

const visits = new WeakSet()


visits.add(users[0]).add(users[1])

users.splice(1, 1)


console.log(visits.has(users[0]));
console.log(visits.has(users[1]));