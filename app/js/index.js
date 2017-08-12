/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import Animal from "./Animal";
logTitle('Enhanced Object Properties');
/* coding examples */
const pricePropName = "PRICE";
const calculator = (name, price) => {
  return {
    name,
    add(n1, n2) {
      return n1 + n2
    },
    [pricePropName.toLowerCase()] : price
  }
}
const calc = calculator('casio', 199.99);

log(calc.name);
log(calc.add(20,20));
log(calc.price);
