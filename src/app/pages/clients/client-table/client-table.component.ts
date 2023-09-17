import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface ClientTableData {
  index: number,
  name: string,
  cnpj: string,
}
@Component({
  selector: 'app-client-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent {
  @Input('dataSource') dataSource = new MatTableDataSource<ClientTableData>()
  displayedColumns: string[] = [
    'index',
    'name',
    'cnpj',
  ]
}
