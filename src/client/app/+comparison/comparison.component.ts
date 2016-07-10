import { Component, provide } from '@angular/core';
import { Calculator, EstimationComponent, InputValue, PassValue, CollectedValue} from '../shared/estimation/index';
import { PertCalculator} from '../+pert/index';
import { ThreePointCalculator} from '../+threepoint/index';

export class CompositeCalculator extends Calculator {
	calculate(value: any) {
		const t = new ThreePointCalculator();
		const p = new PertCalculator();
		return [t.calculate(value)[0], p.calculate(value)[0]];
	}
}
export class PassValueComparison extends PassValue {
	passData (value1: number[], value: CollectedValue) : any {
		return [{data: [value.pessimistic, value.mostLikely, value1[0], value.optimistic], label: ['PERT']},
				{data: [value.pessimistic, value.mostLikely, value1[1], value.optimistic], label: ['Three-point']}]
			  ;
	}
}

@Component({
	selector:'comparison-cmp',
	template:`
	<p>lili</p>
		<estimation-cmp></estimation-cmp>
	`,
	directives: [EstimationComponent],
	providers: [provide(Calculator, { useClass: CompositeCalculator }), provide(PassValue, {useClass: PassValueComparison})]
})
export class ComparisonComponent{}

// @Component ({
// 	selector:'draw-comparison',
// 	template:`
// 		<input-value (value)="processValue($event)"></input-value>
// 	`,
// 	directives: []
// })
