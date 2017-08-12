/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import Animal from "./Animal";
logTitle('Let Keyword');
/* coding examples */
/* here we are using the let keyword to make the variable local to the block behind the for loop */
for(let i =0; i <10; i++) {
  log(i);
}
/* notice that when you inspect i is not defined due to its scope! */
log(i);
