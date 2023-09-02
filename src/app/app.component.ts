import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AuthService} from "@auth0/auth0-angular";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'doc-facil';

  public auth =  inject(AuthService);

  login() {
    this.auth.loginWithRedirect();
  }

  logout() { this.auth.logout({ logoutParams: { returnTo: document.location.origin } }); }

  ngOnInit(): void {
    console.log(environment);
  }
}
