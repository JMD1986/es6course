/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
import * as Math from "./Math";
/* your imports */
logTitle('Named Exports / imports');
/* coding examples */
log(Math.add(2,3));
log(Math.subtract(2,3));
log(Math.multiply(2,3));
log(Math.divide(2,3));
log(Math.pi);
