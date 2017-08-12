/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import Animal from "./Animal";
logTitle('Spread Operator Objects');
/* coding examples */
const address = {
  city: "Chattanooga",
  country: "USA",
  postCode: '37377'
};

const name = {
  firstName: "John",
  lastName: "Daugherty"
};

const person = {...address, ...name};

log(JSON.stringify(person, null, 2));
