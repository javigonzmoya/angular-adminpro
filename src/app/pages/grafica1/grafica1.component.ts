import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public labels: string[] = ['ventas', 'impuestos', 'multas'];
  public data = [
    [140, 500, 40]
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
