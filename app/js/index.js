/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import Animal from "./Animal";
logTitle('Const Keyword');
/* coding examples */
const person = {};
person['name'] = 'John';

log(person.name);

const array = [];
array.push('John');

log(array[0]);
