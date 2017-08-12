/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import Animal from "./Animal";
logTitle('Lexical this');
/* coding examples */
const person = {
  name: "John",
  cars: ['bike', 'camero'],
  toString: function() {
    this.cars.forEach((car) => {
      log(`${this.name} has ${car}`);
    });
  }
}
person.toString();
