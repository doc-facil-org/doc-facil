import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "@auth0/auth0-angular";
import {MatButtonModule} from "@angular/material/button";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public auth =  inject(AuthService);
  logout() { this.auth.logout({ logoutParams: { returnTo: document.location.origin } }); }

}
