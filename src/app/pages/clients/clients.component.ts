import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ClientTableComponent } from './client-table/client-table.component';
import { CityClients, ClientsService } from "./clients.service";
import { Observable, of } from "rxjs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTabsModule, ClientTableComponent, MatProgressSpinnerModule, MatButtonModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [ClientsService]
})
export class ClientsComponent implements OnInit {

  private clientsService = inject(ClientsService);

  clients$: Observable<CityClients | null> = of(null);

  ngOnInit() {
    this.clients$ = this.clientsService.getClients()
  }

}
