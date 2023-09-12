import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Client, JobStatus } from '../clients.component';

export interface ClientTableData {
  pos: number,
  name: string,
  cnpj: string,
  status: JobStatus,
}
@Component({
  selector: 'app-client-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent {
  @Input('dataSource') dataSource = new MatTableDataSource<Client[]>()

}
