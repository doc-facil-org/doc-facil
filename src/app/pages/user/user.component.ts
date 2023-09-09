import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-user',
  standalone: true,
    imports: [CommonModule, RouterOutlet, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public auth =  inject(AuthService);
  logout() { this.auth.logout({ logoutParams: { returnTo: document.location.origin } }); }
}
