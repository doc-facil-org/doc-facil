import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-add-client-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.scss']
})
export class AddClientDialogComponent {
  private dialogRef = inject(MatDialogRef<AddClientDialogComponent>);
  clientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    cnpj: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  addClient() {
    if (this.clientForm.valid) {
      this.dialogRef.close(this.clientForm.value);
    }
  }
}
