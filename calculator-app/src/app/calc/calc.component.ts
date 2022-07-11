/*
-Travis Rosen
-07/09/2022
-calc.component.ts
-Logic for calculator component
*/

import { Component, OnInit } from '@angular/core';
//Import statements for calculator
import { CalcNumbersService } from '../services/calc-numbers.service';
import { OperatorsService } from '../services/operators.service';
import { CalcNumbers } from '../services/interfaces/numbers.interface';
import { CalcOperators } from '../services/interfaces/operators.interface';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  //Defining calculator number and operators arrays which will be pulled from respective services
  calcOperators: CalcOperators[];
  calcNumbers: CalcNumbers[];
  //Defining variables current number, operands, and waiting for second number
  currentNumber: string = '0';
  firstOperand: any = null;
  operator: any = null;
  waitForSecondNumber: boolean = false;

  constructor(private calcNumberService: CalcNumbersService, private operatorsService: OperatorsService) {
    //Calling on the functions within the number/operator service to populate calculator
    this.calcNumbers = calcNumberService.getAllNumbers();
    this.calcOperators = operatorsService.getAllOperators();
   }
   //function that will get the number(s) inputted and display them as current number
   getNumber(string) {
    console.log(string);
    if (this.waitForSecondNumber) {
      this.currentNumber = string;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = string : this.currentNumber += string;
    }
  }
  //Function to check if decimal is selected
  getDecimal(): void {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  //
  doCalculation(op: string, secondOp: any): any {
    switch (op) {
      case '+':
        return this.firstOperand += secondOp;
      case '-':
        return this.firstOperand -= secondOp;
      case '*':
        return this.firstOperand *= secondOp;
      case '/':
        return this.firstOperand /= secondOp;
      case '=':
        return secondOp;
    }
  }

  //
 getOperation(op: string) {
    console.log(op);
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
    console.log(this.firstOperand);
  }

  //Function that will clear current numbers/operations at hand
  clear(): void {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  ngOnInit(): void {
  }

}
