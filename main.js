import names from './scripts/nameList.js';

const ul = document.querySelector('ul');

const li = document.createElement('li');
li.textContent = 'PostCSS'

ul.appendChild(li)

const nameList = document.querySelector('#name-list');

names.forEach((name) => {
    const li = document.createElement('li');
    li.textContent = name;
    nameList.appendChild(li);
})