export interface CollectedValue {
  pessimistic: number;
  optimistic: number;
  mostLikely: number;
}

export interface FinalValues{
	pessimistic: number;
	optimistic: number;
	mostLikely: number;
	estimation: number;
}
export abstract class Calculator {
  abstract calculate(value: CollectedValue) : any;
}

export abstract class PassValue {
  abstract passData(value: number[], value2: CollectedValue) :any;
}