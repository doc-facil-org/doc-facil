import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

import { AuthGuard } from '@auth0/auth0-angular';
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
  { path: '', component: LoginComponent,  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],  },
];
