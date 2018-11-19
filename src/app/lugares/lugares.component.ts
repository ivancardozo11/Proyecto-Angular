import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'Square';

  lat:number = -34.6080556;
  lng:number = -58.3724665;
  lugares = null;
  constructor(private lugaresService:LugaresService){
      this.lugares = lugaresService.getLugares();
    };
}
