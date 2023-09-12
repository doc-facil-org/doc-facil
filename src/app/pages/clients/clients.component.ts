import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { ClientTableComponent } from './client-table/client-table.component';

export enum CLIENT_STATUS {
  idle = 'idle',
  queued = 'queued',
  running = 'running',
  error = 'error',
  success = 'success',
}

export interface Client {
  name: string,
  cnpj: string,
  password: string,
  city: string,
  createdBy: string,
  orgUid: string,
  jobStatus: JobStatus
}

export interface JobStatus {
  status: CLIENT_STATUS,
  lastUpdated: Date,
}

export enum PREFEITURAS {
  canoas = 'Canoas',
  portoAlgre = 'Porto Alegre'
}

export interface TableData {
  city: string,
  clients: Client[]
}



@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTabsModule, ClientTableComponent],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  allClients: Client[] = [
    {
      name: 'JULIA CRISTINA',
      cnpj: '39470165000162',
      password: '123',
      city: PREFEITURAS.portoAlgre,
      createdBy: 'user1',
      orgUid: 'p9fw9ejf12-0ej',
      jobStatus: {
        status: CLIENT_STATUS.idle,
        lastUpdated: new Date()
      },
    },
    {
      name: 'BERND DA SILVA',
      cnpj: '15098514000107',
      password: '123',
      city: PREFEITURAS.portoAlgre,
      createdBy: 'user1',
      orgUid: 'p9fw9ejf12-0ej',
      jobStatus: {
        status: CLIENT_STATUS.queued,
        lastUpdated: new Date()
      },
    },
    {
      name: 'ALEXANDRE CARVALHO',
      cnpj: '33925988000159',
      password: '123',
      city: PREFEITURAS.portoAlgre,
      createdBy: 'user1',
      orgUid: 'p9fw9ejf12-0ej',
      jobStatus: {
        status: CLIENT_STATUS.error,
        lastUpdated: new Date()
      },
    },
    {
      name: 'RODRIGO PNTICELLI',
      cnpj: '35789864000119',
      password: '123',
      city: PREFEITURAS.canoas,
      createdBy: 'user1',
      orgUid: 'p9fw9ejf12-0ej',
      jobStatus: {
        status: CLIENT_STATUS.success,
        lastUpdated: new Date()
      },
    },
    {
      name: 'MARIA MIRANDA',
      cnpj: '39470165000162',
      password: '123',
      city: PREFEITURAS.canoas,
      createdBy: 'user1',
      orgUid: 'p9fw9ejf12-0ej',
      jobStatus: {
        status: CLIENT_STATUS.running,
        lastUpdated: new Date()
      },
    },
  ]

  tableData: TableData[] = [
  ]



  constructor() {

    for (let city of Object.values(PREFEITURAS)) {
      this.tableData.push({ city, clients: this.allClients.filter((client) => client.city == city) });
    }
  }

  openCreateClientDialog() { }

  openDownloadDocumentDialog() { }

  tabChanged(tabChangeEvent: MatTabChangeEvent) { }

}
