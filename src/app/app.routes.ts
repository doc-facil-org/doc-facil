import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";

import { AuthGuard } from '@auth0/auth0-angular';
import { LoginComponent } from "./pages/login/login.component";
import { UserComponent } from "./pages/user/user.component";
import { OrganizationComponent } from "./pages/organization/organization.component";
import { GuideComponent } from "./pages/guide/guide.component";
import { ClientsComponent } from './pages/clients/clients.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, },
  {
    path: 'user', component: UserComponent, canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'guide', component: GuideComponent },
      { path: 'org', component: OrganizationComponent },
    ]
  },
];
