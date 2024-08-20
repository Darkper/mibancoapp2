import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../models/account';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent {
  accountForm: FormGroup;
  account: Account;

  constructor(
    public dialogRef: MatDialogRef<EditAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { account: Account, customerId: number },
    private fb: FormBuilder
  ) {
    this.account = data.account;

    this.accountForm = this.fb.group({
      balance: [this.account.balance, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.accountForm.valid) {
      const updatedAccount = {
        ...this.accountForm.value,
        accountId: this.data.account.number,
        customerId: this.data.customerId
      };
      this.dialogRef.close(updatedAccount);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
