import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core'; //maps
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Routes, RouterModule} from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { CrearComponent } from './crear/crear.component';
import { AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AngularFireAuthModule} from "angularfire2/auth";

const appRoutes: Routes = [
  {path:"", component: LugaresComponent},
  {path:"lugares", component: LugaresComponent},
  {path:"detalle/:id", component: DetalleComponent},
  {path:"contacto", component: ContactoComponent},
  {path:"crear", component: CrearComponent}
];
export const firebaseConfig = {

  apiKey: "AIzaSyDmIjBYqhpY1C84SPjvMv_fb4RN0QC8pIY",
  authDomain: "square-222302.firebaseapp.com",
  databaseURL: "https://square-222302.firebaseio.com",
  storageBucket: "square-222302.appspot.com",
  messagingSenderId: "489584955398"
};
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective ,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,

  ],
  imports: [
    BrowserModule,
      FormsModule,
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD13zATHhMoZlzi9FYJr17MSff79h5tlAg'
    }),BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features

  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
