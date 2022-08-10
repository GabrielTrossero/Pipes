import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';

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

  //AsyncPipe
  prom: Promise<string>;
  promPosts: Promise<any[]>;

  constructor(private postService: PostsService) {
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

    this.prom = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Se resuelve la promesa pasados los 4 segundos'), 4000)
    });

    this.promPosts = this.postService.getAll();
  }

}
