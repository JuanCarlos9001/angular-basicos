import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroeBorrado: string= '';

  heroes: string[]= ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';

}

}
