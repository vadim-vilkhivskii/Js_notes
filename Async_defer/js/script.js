// 'use strict';

// const p = document.querySelectorAll('p');
// console.log(p);


// const script = document.createElement('script');
// script.src = "js/test.js";
// script.async = false;
// document.body.append(script);


function amountOfPages(summary) {
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {

        result += i;

        if(result.length === summary){
            n = i;
            break;
        }
    }
    return n;
}

console.log(amountOfPages(2003));