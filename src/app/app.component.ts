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

  //JSONPipe
  estudiante: any;

  //Lower, Upper, Title
  texto: string;

  //SlicePipe
  animales: string[];
  minimo: number;
  maximo: number;

  constructor() {
    this.precio = 189.99;
    this.numero = 3.5641;
    this.fechaActual = new Date();
    this.percent = Math.random();
    this.estudiante = {
      nombre: 'Roberto',
      apellido: 'Gonzales',
      edad: '33'
    }
    this.texto = "En un lugar de la Mancha"
    this.animales = ['perro', 'gato', 'caballo', 'pato'];
    this.minimo = 0;
    this.maximo = this.animales.length;
  }

}
