import { Component } from '@angular/core';

@Component({
  selector: 'app-err404',
  templateUrl: './err404.component.html',
  styleUrls: [
    './err404.component.css'
  ]
})
export class Err404Component {

year: number = new Date().getFullYear();
}