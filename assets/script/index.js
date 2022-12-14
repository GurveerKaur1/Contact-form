'use strict';

import{ onEvent, select, selectAll, print } from './utilis.js';

import{ Contact } from './contacts.js';
const button = select('.start');
//const input = select('.first');
const number = select('.count')
const child = select('.box')
let count = 0
let arr = [];
let shape = [];
const firstName = select('.first');
const para = select('p')
const form = select('form')
const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;


function updateArray(){
    number.innerText= arr.length;
    // console.log(arr.length)
}

function contacts(){
         
    count+=1;
    const div = document.createElement('div');
  
    div.classList.add("shapes");
    let firstName = select('.first');
    shape.push(div)
    updateArray(arr)
    child.appendChild(div);
    let arr2 =firstName.value;
    let arr3 = arr2.split(',');
    let newContact = new Contact(arr3[0], arr3[1], arr3[2]).getInfo();
    arr.push(newContact)
    console.log(arr)
    const para1 = document.createElement('p');

    para1.innerText = newContact
    div.appendChild(para1)
    number.innerText = arr.length;
    para.innerHTML = '';
   
    onEvent('click', div, function(event){
   event.preventDefault();
   div.remove();
 console.log(arr.length)
 number.innerText = arr.length
   updateArray(arr);
})}
//Form validation
function validateFormInput () {
    if(firstName.value !== '') {
        const contactValues = firstName.value.split(', ');
        let message = '';
        let valid = true;
    
        if(contactValues.length === 3) {
            
            // validate email
            if(!emailRegex.test(contactValues[2])) {
                para.innerHTML= 'A valid Email is required';
                valid = false;
            }

        } else {
         para.innerHTML= 'A valid email is required';
            valid = false;
        }
        
        if (!valid) {
            para.innerHTML = `Full Name, City and Email are required`;
        } 
        else {
          
          message+='';
      contacts()

       
    }

} else {
        para.innerHTML = `Please enter Contact Information`;
    }
} 

// validate form when add button is clicked and add div
onEvent('click', button, function (event) {
    event.preventDefault();
    validateFormInput();
    firstName.value = '';
    message+= '';
    
});

onEvent('load', window, () => {
    div.innerHTML = '';
    form.reset();
});

console.log(updateArray(arr))