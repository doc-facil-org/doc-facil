import {Component, inject, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Client} from "../../pages/clients/clients-types";
import {MatButtonModule} from "@angular/material/button";
import {finalize} from "rxjs";
import {ClientsService} from "../../pages/clients/clients.service";

export interface RequestFileDialogData {
  clients: Client[];
}

@Component({
  selector: 'app-request-files-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatProgressSpinnerModule, MatInputModule, MatSelectModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './request-files-dialog.component.html',
  styleUrls: ['./request-files-dialog.component.scss'],
  providers: [ClientsService]
})
export class RequestFilesDialogComponent {
  private dialogRef = inject(MatDialogRef<RequestFilesDialogComponent>);
  private clientsService = inject(ClientsService);
  constructor(@Inject(MAT_DIALOG_DATA) public data: RequestFileDialogData) {}
  monthControl = new FormControl(0, { validators: [Validators.required], nonNullable: true });
  error = '';
  isLoading = false;

  requestFiles() {
    this.error = '';
    this.isLoading = true
    this.clientsService.requestClientsFiles(this.data.clients, this.monthControl.value)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: () => this.dialogRef.close(true),
        error: (error) => this.error = 'Erro ao solicitar arquivos'
      });
  }

}
