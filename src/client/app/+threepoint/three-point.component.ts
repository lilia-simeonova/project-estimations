import { Component, provide } from '@angular/core';
import { Calculator, EstimationComponent, CollectedValue, PassValue } from '../shared/estimation/index';

export class ThreePointCalculator extends Calculator{
	calculate(value: any) {
		const threePointResult = ( value.mostLikely + value.optimistic + value.pessimistic ) / 3;
		return [parseFloat(threePointResult.toFixed(2))];
	}
}

export class PassValueThreePoint extends PassValue {
	passData (value1: number[], value: CollectedValue) : any {
		return [{data: [value.pessimistic, value.mostLikely, value1[0], value.optimistic], label: 'Three-point'}];
	}
}

@Component({
	selector: 'threepoint-cmp',
	template: `
			<h2>Add values for your Three-Point Estimation:</h2>
			<estimation-cmp></estimation-cmp>
		`,
	styleUrls: ['app/shared/estimation/estimation.component.css'],
	directives: [EstimationComponent],
	providers: [provide(Calculator, { useClass: ThreePointCalculator }), provide(PassValue, {useClass:PassValueThreePoint})]
})

export class ThreePointComponent {}