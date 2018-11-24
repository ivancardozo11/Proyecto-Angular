import {Injectable} from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import  *  as firebase from "firebase/app";
import { Router } from "@angular/router";
@Injectable()
export class AutorizacionService{

  constructor(private angularFireAuth:AngularFireAuth , private router: Router){
    this.isLogged();
  }
  public facebookLogin(){
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((result)=>{
      console.log(result);
      alert('Usuario logeado con facebook!!');
        this.router.navigate(['lugares']);

    })
    .catch((error)=>{
      console.log(error);
    })
  }
  public login = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
    .then((response) =>{
        alert('Usuario logeado con exito!!!!');
        console.log(response);
        this.router.navigate(['lugares']);
    })
    .catch((error)=>{
      alert('Un error ha ocurrido');
      console.log(error);
    });
  }
  public registro = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((response) =>{
        alert('Usuario registrado con exito!!!!');
        console.log(response);
    })
    .catch((error)=>{
      alert('Un error ha ocurrido');
      console.log(error);
    });
  }
  public isLogged(){
    return this.angularFireAuth.authState;
  };
  public logout(){
    this.angularFireAuth.auth.signOut();
    alert('Sesion Cerrada');
    this.router.navigate(['lugares']);
  };
  public getUser(){
    return this.angularFireAuth.auth;
  }
}
