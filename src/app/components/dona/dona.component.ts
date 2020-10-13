import { Component, Input } from '@angular/core';

import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input('labels') public doughnutChartLabels: Label[] = ['label1', 'label2', 'label3'];
  @Input('data') public doughnutChartData: MultiDataSet =[
    [350, 450, 100],
  ]
  @Input('title') title: string = 'Sin titulo';
  // Doughnut
  
  


  public colors: Colors[] = [
    { backgroundColor: [ '#6857E6','#009FEE','#F02059' ] }
  ]


}
