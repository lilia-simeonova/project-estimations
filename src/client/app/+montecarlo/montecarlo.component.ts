import { Component } from '@angular/core';
import { ProvideValuesComponent, SubmittedValues} from './montecarlo-calculations';
import { BarChartDemoComponent } from './chart-montecarlo';

export interface dataChart {
	data: number [];
	label: any;
}

@Component ({
	selector: 'montecarlo-cmp',
	templateUrl: 'app/+montecarlo/montecarlo.component.html',
	styleUrls: ['app/+montecarlo/montecarlo.component.css'],
	directives: [ProvideValuesComponent, BarChartDemoComponent]
})
export class MonteCarloComponent {
	public myResult: SubmittedValues;
	public setOfResult: dataChart[] = [] ;
	public times: number;
	public random: number;
	public finalValue: dataChart[] = [{ data: [], label: ""}];
	randomIntFromInterval (min: number, max: number) {
		return Math.floor(Math.random() * ( max - min + 1 ) + min);
	}
	getValues (value: SubmittedValues){
		this.myResult = value;
		this.times = this.myResult.numbertimes;
		this.random = this.randomIntFromInterval(this.myResult.pessimistic, this.myResult.optimistic);
		//this.setOfResult.push(this.random);
		while (this.times > 0) {
			this.setOfResult.push({data: [this.randomIntFromInterval(this.myResult.pessimistic, this.myResult.optimistic)], label: this.randomIntFromInterval(this.myResult.pessimistic, this.myResult.optimistic)});
			this.times -= 1;			
		}

		this.finalValue = this.setOfResult;
		return this.setOfResult;
	}	

}