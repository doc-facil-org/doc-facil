import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxChange, MatCheckboxModule} from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Client } from "../clients-types";
import { SelectionModel } from '@angular/cdk/collections';
import {MatButtonModule} from "@angular/material/button";
import {JobStatusPipe} from "../../../shared/job-status.pipe";

@Component({
  selector: 'app-client-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatButtonModule, JobStatusPipe],
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent {
  @Input() clients: Client[] = [];
  @Output() selectionChange = new EventEmitter<Client[]>();
  displayedColumns = ['select', 'position', 'name', 'cnpj', 'status', 'menu']
  selection = new SelectionModel<Client>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.clients.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.clients);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Client): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  changeSelection(row: any) {
    this.selection.toggle(row);
    this.selectionChange.emit(this.selection.selected);
  }

  checkAllRowsChange(event: MatCheckboxChange) {
    if (event) {
      this.toggleAllRows();
    }
    this.selectionChange.emit(this.selection.selected);
  }
}
