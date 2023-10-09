import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ClientTableComponent } from './client-table/client-table.component';
import { CityClients, ClientsService } from "./clients.service";
import { Observable, of } from "rxjs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {AddClientDialogComponent} from "../../shared/add-client-dialog/add-client-dialog.component";

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTabsModule, ClientTableComponent, MatProgressSpinnerModule, MatButtonModule, MatDialogModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [ClientsService]
})
export class ClientsComponent implements OnInit {

  private clientsService = inject(ClientsService);
  private dialog = inject(MatDialog);

  clients$: Observable<CityClients | null> = of(null);

  ngOnInit() {
    this.clients$ = this.clientsService.getClients();
  }

  addClient() {
    const dialogRef = this.dialog.open(AddClientDialogComponent);
    dialogRef.afterClosed().subscribe((result?: { name: string, cnpj: string, password: string }) => {
      if (result) {
        console.log('added', result);
        this.clients$ = this.clientsService.getClients();
      }
    });
  }

}
