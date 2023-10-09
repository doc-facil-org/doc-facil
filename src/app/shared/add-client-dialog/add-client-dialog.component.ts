import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ClientsService} from "../../pages/clients/clients.service";
import {finalize} from "rxjs";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-add-client-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.scss'],
  providers: [ClientsService]
})
export class AddClientDialogComponent {
  private clientsService = inject(ClientsService);
  private dialogRef = inject(MatDialogRef<AddClientDialogComponent>);
  clientForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    cnpj: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    password: new FormControl('', { validators: [Validators.required], nonNullable: true })
  });
  error = '';
  isSavingClient = false;

  addClient() {
    if (this.clientForm.valid) {
      this.error = '';
      this.isSavingClient = true
      this.clientsService.createClient(this.clientForm.value as { name: string; cnpj: string; password: string; })
        .pipe(finalize(() => this.isSavingClient = false))
        .subscribe({
          next: () => this.dialogRef.close(true),
          error: (error) => this.error = 'Erro ao adicionar cliente'
        });
    }
  }
}
