import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.scss'
})
export class CreateCustomerComponent {
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateCustomerComponent>,
    private customerService: CustomerService,
  ) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      this.customerService.createCustomerWithAccount(this.customerForm.value).subscribe(response => {
        this.dialogRef.close(response); // Puedes enviar los datos de vuelta al componente padre
      })
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
