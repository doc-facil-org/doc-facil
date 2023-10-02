import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navigation-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <ul>
      <li routerLink="./clients" routerLinkActive="active" ariaCurrentWhenActive="page" (click)="navEvent.emit(true)">
        Meus clientes
      </li>
      <li routerLink="./org" routerLinkActive="active" ariaCurrentWhenActive="page" (click)="navEvent.emit(true)">
        Gestão da organização
      </li>
      <li routerLink="./guide" routerLinkActive="active" ariaCurrentWhenActive="page" (click)="navEvent.emit(true)">
        Guia de Instruçoes
      </li>
    </ul>
  `,
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent {
  @Output() navEvent = new EventEmitter<boolean>(false);
}
