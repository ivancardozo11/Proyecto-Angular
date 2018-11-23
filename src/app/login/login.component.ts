import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
constructor(private autorizacionService: AutorizacionService){
  this.autorizacionService.login('email', 'password');
}
}
