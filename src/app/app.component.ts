import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //CurrentcyPipe (divisa)
  precio: number;

  //DecimalPipe
  numero: number;

  //DatePipe
  fechaActual: Date;

  //PercentPipe
  percent: number;

  constructor() {
    this.precio = 189.99;
    this.numero = 3.5641;
    this.fechaActual = new Date();
    this.percent = Math.random();
  }

}
