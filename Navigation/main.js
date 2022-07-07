// console.log(document.head); //обратится череp дом к head
// console.log(document.documentElement); //обратиться к тегу html 
// console.log(document.body.childNodes); // позволяет найти все узлы которые находяться в родителе 

// console.log(document.body.firstChild); //Обращение к первому элементу(узлу) родителя
// console.log(document.body.firstElementChild); //Обращение к первому элементу родителя
// console.log(document.body.lastChild);  //Обращение к последнему элементу(узлу) родителя
// console.log(document.body.lastElementChild);  //Обращение к последнему элементу родителя


// console.log(document.querySelector('#current').parentNode); //обратиться к родительскому узлу элемента
// console.log(document.querySelector('#current').parentNode.parentNode); //обратиться к родителю родителя узлу элемента

// console.log(document.querySelector('#current').parentElement); //обратиться к родительскому єлементу элемента
// console.log(document.querySelector('#current').parentElement.parentElement); //обратиться к родителю родителя элемента элемента

// console.log(document.querySelector('[data-current="3"]').nextSibling);//поиск узла по дата атрибуту и обращение  
//                                                                       //к его следующему соседу(узлу)
// console.log(document.querySelector('[data-current="3"]').previousSibling);//поиск узла по дата атрибуту и обращение  
//                                                                       //к его предыдущему соседу

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);//поиск элемента по дата атрибуту и обращение  
//                                                                       //к его следующему соседу(элементу)
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);//поиск узла по дата атрибуту и обращение  
//                                                                       //к его предыдущему соседу(элементу)

for (let node of document.body.childNodes) { //перебор всех узлов в body псевдомасиве и отсеивание текстовых узлов
    if (node.nodeName == '#text') {
        continue;
    }
        console.log(node);
}



