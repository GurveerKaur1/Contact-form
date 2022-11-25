'use strict';

import{ onEvent, select, selectAll, print } from './utilis.js';
import{ Contact } from './contacts.js';

const button = select('.start');
//const input = select('.first');
const number = select('.count')
const child = select('.child')
let count = 0
let arr = [];
onEvent('click', button, function(event){
    event.preventDefault();
      count+=1;
    const div = document.createElement('div');
    
      div.classList.add("shapes");
      let firstName = select('.first');
      
   
    console.log()
    child.appendChild(div);
    
    let arr2 =firstName.value;
   

let arr3 = arr2.split(',');
let newContact = new Contact(arr3[0], arr3[1], arr3[2]).getInfo();
arr.push(newContact)
const para1 = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');
    para1.innerText = 'ji'; 
    para2.innerText = arr[1];
    para3.innerText = arr[2];
    div.appendChild(para1)
    div.appendChild(para2)
    div.appendChild(para3)
//div.innerText = newContact;
console.log(newContact);



onEvent('click', div, function(event){
    event.preventDefault();
    div.remove();
})


});

onEvent('click', button, function(event){
    event.preventDefault();
    number.innerText = count;
})
