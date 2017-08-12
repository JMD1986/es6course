/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import Animal from "./Animal";
logTitle('Function default parameters');
/* coding examples */
const calculatePay = (yearSalary, bonus = {
  teamBonus : 0,
  employeeBonus: 0
}) => {
  return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

log(calculatePay(20000, {teamBonus: 2000, employeeBonus: 500}));
