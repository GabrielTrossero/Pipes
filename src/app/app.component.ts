import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //CurrentcyPipe (divisa)
  precio: number;

  constructor() {
    this.precio = 189.99;
  }

}
