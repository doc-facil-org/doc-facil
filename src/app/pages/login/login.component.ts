import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public auth =  inject(AuthService);

  login() {
    this.auth.loginWithRedirect({appState: { target: '/home' }});
  }
}
