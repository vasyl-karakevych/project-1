'use strict';

let div = document.createElement('div');
div.classList.add('newDiv');
div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'red';

let button = document.querySelectorAll('.button'),
    circles = document.getElementById('circles'),
    circles.getElementById('box');


button[1].after(div);
div.innerHTML = "<h1>start</h1>";
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');

circles.replaceWith(div);
// circles.append(div2);





