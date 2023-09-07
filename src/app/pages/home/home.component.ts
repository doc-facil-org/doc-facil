import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public auth =  inject(AuthService);
  logout() { this.auth.logout({ logoutParams: { returnTo: document.location.origin } }); }
}
