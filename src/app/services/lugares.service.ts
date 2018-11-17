import {Injectable} from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable()
export class LugaresService{
    lugares:any = [];
    i:number=0;
    constructor(private afDB:AngularFirestore){}
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
    }
    
}
