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
import { HttpClientModule } from '@angular/common/http';
import {LinkifystrPipe} from './pipe/linkifystr.pipe';
import {LoginComponent} from './login/login.component';
import {RegistroComponent} from './registro/registro.component';
import {AutorizacionService} from "./services/autorizacion.service";
const appRoutes: Routes = [
  {path:"", component: LugaresComponent},
  {path:"lugares", component: LugaresComponent},
  {path:"detalle/:id", component: DetalleComponent},
  {path:"contacto", component: ContactoComponent},
  {path:"crear/:id", component: CrearComponent},
  {path:"login", component: LoginComponent},
  {path:"registro", component: RegistroComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective ,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe,
    LoginComponent,
    RegistroComponent

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
    AngularFireStorageModule,// imports firebase/storage only needed for storage features
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [LugaresService , AutorizacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
