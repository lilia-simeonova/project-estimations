import {Component, provide} from '@angular/core';

import {EstimationComponent, Calculator, PassValue, CollectedValue} from '../shared/estimation/index';

export class PertCalculator extends Calculator {
  calculate(value: CollectedValue) {
    const pertResult = ( 4 * value.mostLikely + value.optimistic + value.pessimistic ) / 6;
	return [parseFloat(pertResult.toFixed(2))];
  }
}

export class PassValuePert extends PassValue {
	passData (value1: number[], value: CollectedValue) : any {
		return [{data: [value.pessimistic, value.mostLikely, value1[0], value.optimistic], label: ['PERT']}];
	}
}

@Component({
	selector: 'pert-cmp',
	template: `
			<h2>Add values for your PERT Estimation:</h2>
			<estimation-cmp></estimation-cmp>
		`,
	directives: [EstimationComponent],
	providers: [provide(Calculator, { useClass: PertCalculator }), provide(PassValue, { useClass: PassValuePert })]
})
export class PertComponent {}

