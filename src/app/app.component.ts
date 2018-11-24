import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {AutorizacionService} from "./services/autorizacion.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  constructor(private autorizacionService: AutorizacionService){
    this.autorizacionService.isLogged()
    .subscribe((result)=>{
      if(result && result.uid){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
    }, (error)=>{
      this.loggedIn = false;
    })
  }
  logout(){
    this.autorizacionService.logout();
    
  }
  // items: Observable<any[]>;
  // constructor(db: AngularFirestore) {
  //   this.items = db.collection('items').valueChanges();
  // }
}
