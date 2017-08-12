/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('ES6 Classes');
/* coding examples */
class Animal {
  constructor(name, age) {
    log(`${name} is an animal and was created`);
    this.name = name;
    this.age = age;
  }
  eat() {
    log(`${this.name} is eating`);
  }
  sleep(){
    log(`${this.name} is eating`);
  }
  logAge(){
    log(`${this.name} is ${this.age} years old!`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed){
    super(name, age)
    this.breed = breed;
  }
  logBreed(){
    log(`${this.name} is a ${this.breed}`)
  }
  logAgeFromDog(){
    super.logAge();
  }
}

const mike = new Dog("mike", 4, 'bulldog');
mike.logBreed();
mike.logAgeFromDog();
