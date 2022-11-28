// CommonModulo están todas las directivas esenciales por tanto es importanto importarlo
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    /* indica de que componentes se compone este modulo */
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    /* indica que componentes quiero hacer visible fuera de este modulo */
    exports: [
        HeroeComponent,
        ListadoComponent
    ],
    /* indica todos los modulos que queramos importar */
    imports: [
        CommonModule //
    ]
})
export class HeroesModule {

}