import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {Client} from "../clients-types";

@Component({
  selector: 'app-client-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent {
  @Input() clients: Client[] = [];
  displayedColumns = ['name', 'cnpj']

}
