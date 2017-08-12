/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import Animal from "./Animal";
logTitle('Template Literals');
/* coding examples */
const name = 'Anna';
const country = "America";
const age = 23;

log(`name: ${name.length} Country ${country}  age ${age}`);

/* more info here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals */
