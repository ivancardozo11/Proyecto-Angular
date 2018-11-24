import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
lugar:any = {};
  id:any = null;
  // results es un string de resultados que me va a regresar google.
  results$ : Observable<any>;
  private searchField: FormControl;
constructor(private lugaresService: LugaresService, private route: ActivatedRoute, private httpClient :HttpClient){
  this.id = this.route.snapshot.params['id'];
  if(this.id != 'new'){
    this.lugaresService.getLugar(this.id)
    .subscribe(lugar =>{
        this.lugar = lugar;
    });
  }
  const URL = 'https://maps.google.com/maps/api/geocode/json';
  // Este metodos nos va a ayudar a saber en que momento se estan cambiando
  this.searchField = new FormControl();
  this.results$= this.searchField.valueChanges.debounceTime(500)
  .switchMap(query => this.httpClient.get(`${URL}?address=${query}`))
  .map(response => response.json())
  .map(response => response.results);
}
 guardarLugar(lugar){
   var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
   this.lugaresService.obtenerGeoData(direccion).subscribe(  (result) =>{
     // this.lugar.lat = result.json().results[0].geometry.location.lat;
     // this.lugar.lng = result.json().results[0].geometry.location.lng;

     if(this.id != 'new'){
       this.lugaresService.editarLugar(this.lugar);
        alert('Negocio editado  con exito');
     }else{
       this.lugar.id =  Date.now();
       this.lugaresService.guardarLugar(this.lugar);
       alert('Negocio guardado con exito');
     }
     this.lugar = {};
   });

   }
}
