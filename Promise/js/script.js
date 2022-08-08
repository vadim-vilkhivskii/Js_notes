'use strict';


// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
    
//     }, 2000);
    
// });
// req.then((product) => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         },2000)
//     });
    
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data)
// }).catch(()=>{
//     console.error('Error')
// }).finally(()=>{
//     console.log('Finally')
// })

// const test = time => {
//     return new Promise(resolve => {
//     setTimeout(() => resolve(), time)
//     });
// }

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
// console.log('ALL')
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('ALL');
// });
    
fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))


        'use strict';

// сделать запрос
httpGet('/article/promise/user.json')
  // 1. Получить данные о пользователе в JSON и передать дальше
  .then(response => {
    console.log(response);
    let user = JSON.parse(response);
    return user;
  })
  // 2. Получить информацию с github
  .then(user => {
    console.log(user);
    return httpGet(`https://api.github.com/users/${user.name}`);
  })
  // 3. Вывести аватар на 3 секунды (можно с анимацией)
  .then(githubUser => {
    console.log(githubUser);
    githubUser = JSON.parse(githubUser);

    let img = new Image();
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.appendChild(img);

    setTimeout(() => img.remove(), 3000); // (*)
  });
