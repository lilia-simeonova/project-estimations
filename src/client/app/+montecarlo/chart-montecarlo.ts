import {Component, Input, ViewChild} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {BaseChartComponent, CHART_DIRECTIVES} from 'ng2-charts';
import {dataChart} from './montecarlo.component';


@Component({
  selector: 'bar-chart-demo',
  template: `
           <base-chart class="chart"
             [datasets]="barChartData"
             [labels]="barChartLabels"
             [options]="barChartOptions"
             [legend]="barChartLegend"
             [chartType]="barChartType"
             (chartHover)="chartHovered($event)"
             (chartClick)="chartClicked($event)">
           </base-chart>
  `,
  styles: [`
    base-chart {
      display: inline-block;
      width: 500px;
      height: 500px;
    }
    `
  ],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class BarChartDemoComponent {
    @ViewChild(BaseChartComponent) chart: BaseChartComponent;
     @Input()
     set data(value: dataChart[]) {
      // console.log("lili e pich");
      console.log("value is:", value);  
      //this.barChartData = [{data: value[0].data, label: value[1].label}]; 
      this.barChartData = value;
      console.log("what is value:", this.barChartData); 
       if (this.chart) {
          this.chart.ngOnChanges();
        }
    }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData: dataChart[] = [];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}