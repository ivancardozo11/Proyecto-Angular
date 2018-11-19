import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { style, trigger, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [trigger('contenedorAnimable' ,[
    // aca empieza la animacion
    state('inicial', style({
      opacity: 0,
      backgroundColor: 'green',
      transform: 'rotate3d(0,0,0 ,0deg)'
    })),
    state('final', style({
      opacity: 1,
      backgroundColor: 'yellow',
      transform: 'rotate3d(5,10,20,30deg)'
    })),
    transition('inicial => final', animate(1000)),
    transition('final => inicial', animate(500))
    // aca termina la animacion
  ])
]
})
export class LugaresComponent {
  title = 'Square';
  state = 'inicial';
  lat:number = -34.6080556;
  lng:number = -58.3724665;
  lugares = null;
  animar(){
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }
  animacionInicia(e){
    console.log('iniciado')
    console.log(e);
  }
  animacionTermina(e){
    console.log('Terminado')
    console.log(e);
  }
  constructor(private lugaresService:LugaresService){
      this.lugares = lugaresService.getLugares();
    };
}
