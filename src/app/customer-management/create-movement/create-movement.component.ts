import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../models/account';

@Component({
  selector: 'app-create-movement',
  templateUrl: './create-movement.component.html',
  styleUrls: ['./create-movement.component.scss']
})
export class CreateMovementComponent {
  movementForm: FormGroup;
  accountId: number;
  customerId: number;

  constructor(
    public dialogRef: MatDialogRef<CreateMovementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { account: Account, customerId: number, message: string },
    private fb: FormBuilder
  ) {
    this.accountId = data.account.number;
    this.customerId = data.customerId;

    this.movementForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit(): void {
    if (this.movementForm.valid) {
      const movement = {
        ...this.movementForm.value,
        accountId: this.accountId,
        customerId: this.customerId,
        date: new Date()
      };
      this.dialogRef.close(movement);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
