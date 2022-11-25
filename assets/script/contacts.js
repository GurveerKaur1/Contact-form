'use strict';

class Contact {

    #name;
    #city;
    #email;


    constructor(name, city, email) {
            this.#name = name;
            this.#city = city;
            this.#email = email;
    }


    setName(name){
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
    setCity(city){
        this.#city = city;
    }
    getCity(){
        return this.#city
    }
    setEmail(email){
        this.#email = email;
    }

    getEmail(){
        return this.#email;
    }

      getInfo(){
        return `Name:${this.#name } \n City: ${this.#city} \n Email: ${this.#email}`
    }
}

export { Contact } ;