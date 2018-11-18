import {Injectable} from "@angular/core";
import {AngularFirestore } from "@angular/fire/firestore";
import {HttpClient} from '@angular/common/http';
import {Headers} from "@angular/http"

@Injectable()
export class LugaresService{
  API_ENDPOINT = 'AIzaSyDmIjBYqhpY1C84SPjvMv_fb4RN0QC8pIY';
    lugares:any = [];
    i:number=0;
    constructor(private afDB:AngularFirestore , private http: HttpClient ){}
    // Aca nos conectamos con la base de datos.
    public getLugares(){
        this.i=0;
        this.afDB.firestore.collection('lugares').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                this.lugares[this.i++]=doc.data();
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
      return this.lugares;
    }
    public buscarLugar(id){
        return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
    }
    public guardarLugar(lugar){
         this.afDB.collection('lugares').doc(''+lugar.id).set(lugar);
         // const headers = new Headers({"Content-Type": "application/json"});
         // return this.http.post(this.API_ENDPOINT+'/lugares.json',lugar,{headers:headers});
    }
    public editarLugar(lugar){
         this.afDB.collection('lugares').doc(''+lugar.id).set(lugar);
    }
    public obtenerGeoData(direccion){
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+direccion+'&key=AIzaSyDmIjBYqhpY1C84SPjvMv_fb4RN0QC8pIY');

    }
 public getLugar(id){
   return this.afDB.collection('lugares').doc(id).set(lugar);
 }


}
