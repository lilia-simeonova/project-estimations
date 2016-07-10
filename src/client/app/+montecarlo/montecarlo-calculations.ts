import { Component, Output, EventEmitter, provide  } from '@angular/core';

export interface SubmittedValues {
	optimistic: number;
	pessimistic: number;
	numbertimes: number;
}
@Component ({
	selector: 'provide-values',
	template: `
    <span class="inputValue"> Add pessimistic value </span> <input type="number" #pessimistic> <br> <br>
    <span class="inputValue"> Add optimistic value </span> <input type="number" #optimistic> <br> <br> <br> <br>
    <span class="inputValue"> Specify how many times you want to run the algo</span> <input type="number" #numberestimation> <br> <br>
    <button (click)="onClick(pessimistic.value, optimistic.value, numberestimation.value)">Calculate</button>
  `,
    styleUrls: ['app/+montecarlo/montecarlo.component.css']
})

export class ProvideValuesComponent {
	@Output() value = new EventEmitter<SubmittedValues>();
	onClick(v1: string, v2: string, v3: string) {
    this.value.emit({
      pessimistic: parseInt(v1),
      optimistic: parseInt(v2),
      numbertimes: parseInt(v3)
    });
	}
}