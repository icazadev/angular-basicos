import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // nombre con el que se va a conocer este componente
  templateUrl: './app.component.html', //nombre con el que identifica el html de este componente
  styleUrls: ['./app.component.css'] //nombre de los archivos que daran estilo al html de este componente
})
export class AppComponent {
  title: string = 'bases'
  numero: number = 0
  base: number = 5

  sumar() {
    this.numero += 1
  }


  restar() {
    this.numero -= 1
  }


  acumular(valor: number) {
    this.numero += valor
  }

}