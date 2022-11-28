import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
    heroes: string[] = ['spiderman', 'Iron man', 'Hawk', 'Goku', 'Superman']
    heroeBorrado = ""

    borrarHeroe(): string {
      this.heroeBorrado = this.heroes?.pop() || ''
      return this.heroeBorrado
    }
}
