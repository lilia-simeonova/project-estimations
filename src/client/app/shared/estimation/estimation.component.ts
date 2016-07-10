import { Component, Output, EventEmitter, provide } from '@angular/core';

import {Calculator, CollectedValue, PassValue } from './calculate';

import {LineChartDemoComponent, DatasetValues} from './chart';



/////////////////////////////////////////////////////////////////////////////////////////
@Component({
	selector: 'input-value',
  styleUrls: ['app/shared/estimation/estimation.component.css'],
	template: `
    <span class="inputValue"> Add pessimistic value </span> <input type="number" #pessimistic> <br> <br>
    <span class="inputValue"> Add Most likely value </span> <input type="number" #mostlikely> <br> <br>
    <span class="inputValue"> Add optimistic value </span> <input type="number" #optimistic> <br> <br>
    <button (click)="onClick(pessimistic.value, optimistic.value, mostlikely.value)">Calculate</button>
  `
})
export class InputValue {
  @Output() value = new EventEmitter<CollectedValue>();
 // pertValue: number;
	onClick(v1: string, v2: string, v3: string) {
    this.value.emit({
      pessimistic: parseInt(v1),
      optimistic: parseInt(v2),
      mostLikely: parseInt(v3)
    });
	}
}

@Component({
  selector: 'estimation-cmp',
  templateUrl: 'app/shared/estimation/estimation.component.html',
  styleUrls: ['app/shared/estimation/estimation.component.css'],
  directives: [InputValue, LineChartDemoComponent]
})
export class EstimationComponent {
  public collectedResult: any;
  public myData: DatasetValues = [{ data: [], label: 'None' }];
  public testData: any;
  constructor(private calculator: Calculator, private passValue: PassValue) {}
  //constructor(private passData: passData) {} 

  processValue(val: CollectedValue) {
    this.collectedResult = this.calculator.calculate(val);
    this.myData = this.passValue.passData(this.collectedResult, val);
       console.log("My data is:",this.passValue.passData(this.collectedResult, val););
       console.log("Result from passValue function with Value property:", this.myData[0].label);
    //   if(this.collectedResult.some(isNaN)){ 
    //   this.myData = [];
    //   // console.log(isNaN(this.collectedResult));
    //   // console.log(val.pessimistic, val.mostLikely, parseFloat(this.collectedResult[0]), val.optimistic);
    //   // console.log(this.collectedResult);
    //   this.collectedResult = 'Please add number';
    // } else {
    //     if (this.collectedResult.length === 1) {
    //       // if(this.collectedResult[0] === 'undefined') {
    //       //   this.collectedResult[0] = 0;
    //       // }
    //       // if(this.collectedResult[1] === 'undefined') {
    //       //   this.collectedResult[1] = 0;
    //       // }
    //       this.myData = [val.pessimistic, val.mostLikely, this.collectedResult[0], 0, val.optimistic];
    //       //console.log(this.myData);
    //     }

    //     else {
    //       this.myData = [val.pessimistic, val.mostLikely, this.collectedResult[0], this.collectedResult[1], val.optimistic];
          
    //     } 
    //   }      
  }
  myColor(){
    if (isNaN(this.collectedResult)) {
      return "red";
    } else {
      return "black";
    }
  }    
}
