/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import Animal from "./Animal";
logTitle('Array Destructuring');
/* coding examples */
const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];
// const anna = names[0];
// const mariam = names[1];
// const joe = names[2];

const [anna, mariam, joe, ...restOfNames ] = names;

log(`${anna} ${mariam} ${joe}`);
log(`${restOfNames.length}`)
