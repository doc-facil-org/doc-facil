import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { ClientTableComponent } from './client-table/client-table.component';
import { CityClients, ClientsService } from "./clients.service";
import { Observable, of } from "rxjs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {AddClientDialogComponent} from "../../shared/add-client-dialog/add-client-dialog.component";
import {Client} from "./clients-types";
import {RequestFilesDialogComponent} from "../../shared/request-files-dialog/request-files-dialog.component";

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

  selectedClients: Client[] = [];
  selectedPoaClients: Client[] = [];
  selectedCanoasClients: Client[] = [];

  ngOnInit() {
    this.clients$ = this.clientsService.getClients();
  }

  changeCityTab(event: MatTabChangeEvent) {
    if (event.index === 0) { //POA
      this.selectedClients = this.selectedPoaClients;
    } else { //CANOAS
      this.selectedClients = this.selectedCanoasClients;
    }
  }

  addClient() {
    const dialogRef = this.dialog.open(AddClientDialogComponent);
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.clients$ = this.clientsService.getClients();
      }
    });
  }

  requestFiles() {
    if (this.selectedClients.length > 0) {
      const dialogRef = this.dialog.open(RequestFilesDialogComponent, { data: { clients: this.selectedClients } });
      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result) {
          this.clients$ = this.clientsService.getClients();
        }
      });
    }
  }

}
