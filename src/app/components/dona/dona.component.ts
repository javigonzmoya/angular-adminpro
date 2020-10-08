import { Component, Input, OnInit } from '@angular/core';

import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  @Input('labels') labelsEntrada;
  @Input('data') dataEntrada;
  @Input('title') title = 'Sin titulo';
  // Doughnut
  public doughnutChartLabels: Label[];
  public doughnutChartData: MultiDataSet;


  public colors: Colors[] = [
    { backgroundColor: [ '#6857E6','#009FEE','#F02059' ] }
  ]

  constructor() { }

  ngOnInit(): void {
    this.doughnutChartLabels = this.labelsEntrada;
    this.doughnutChartData = this.dataEntrada;
  }

}
