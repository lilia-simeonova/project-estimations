import {Component, Input, ViewChild} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {BaseChartComponent} from 'ng2-charts';

export interface DatasetValues {
  data: number[];
  label: string;
}

@Component({
  selector: 'line-chart-demo',
  templateUrl: 'app/shared/estimation/chart.html',
  styles: [
    `
    base-chart {
      display: block;
      width: 500px;
      height: 500px;
    }
    `
  ],
  directives: [BaseChartComponent, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class LineChartDemoComponent {
  @ViewChild(BaseChartComponent) chart: BaseChartComponent;
  public temp: number[][];
  @Input()
  set data(value: DatasetValues[]) {
   this.lineChartData = value;
   console.log("what is value:", value[0].data);
  // console.log( this.lineChartData[0].data);
  // this.temp = value[0].values;
  // this.lineChartData[0].data = this.temp;
   // console.log("The passed value is:", this.lineChartData[0].data);
    // console.log("myData contains array of objects:", value);
    // console.log("First element of myData is object:", value[0]);
    // console.log("The label of myData first object is:", value[0].values);
    if (this.chart) {
      this.chart.ngOnChanges();
    }
  }

  public lineChartData: DatasetValues[] = [];
  public lineChartLabels: any[] = ['Pessimistic', 'Most likely', 'Estimated', 'Optimistic'];
  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };
  public lineChartColours:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: 'red',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
