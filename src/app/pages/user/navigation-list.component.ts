import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navigation-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <ul>
      <li routerLink="./clients" routerLinkActive="active" ariaCurrentWhenActive="page">
        MEUS CLIENTES
      </li>
      <li routerLink="./org" routerLinkActive="active" ariaCurrentWhenActive="page">
        Gestão da organização
      </li>
      <li routerLink="./guide" routerLinkActive="active" ariaCurrentWhenActive="page">
        GUIA DE INSTRUÇOES
      </li>
    </ul>
  `,
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent {

}
