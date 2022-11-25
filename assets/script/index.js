'use strict';

import{ onEvent, select, selectAll, print } from './utilis.js';
import{ Contact } from './contacts.js';

const button = select('.start');
//const input = select('.first');
const number = select('.count')
const child = select('.child')
let count = 0
let arr = [];

const firstName = select('.first');
const para = select('p')
const form = select('form')
const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

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
          para.innerHTML = 'Form submitted'
          message+='';

         
         count+=1;
         const div = document.createElement('div');
       
         div.classList.add("shapes");
         let firstName = select('.first');
         child.appendChild(div);
         let arr2 =firstName.value;
         let arr3 = arr2.split(',');
         let newContact = new Contact(arr3[0], arr3[1], arr3[2]).getInfo();
         arr.push(newContact)
         const para1 = document.createElement('p');
   
         para1.innerText = newContact
         div.appendChild(para1)
         number.innerText = arr.length;
        
         onEvent('click', div, function(event){
        event.preventDefault();
        div.remove();
        number.innerText = arr.length;
    })
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

