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
}
const bobby = new Animal("Bobby", 2);
bobby.eat();
bobby.sleep();
