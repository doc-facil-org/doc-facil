import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "@auth0/auth0-angular";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public auth =  inject(AuthService);

  login() {
    this.auth.loginWithRedirect({appState: { target: '/user/home' }});
  }
}
