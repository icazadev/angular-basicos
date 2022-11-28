import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `Hola soy un componente`,
    styleUrls: ['../../app.component.css']
})
export class ContadorComponent {
    titulo: string = 'contador'
}