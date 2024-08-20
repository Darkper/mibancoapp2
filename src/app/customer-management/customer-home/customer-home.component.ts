import {Component, OnInit} from '@angular/core';
import {Customer} from "../models/customer";
import {CustomerService} from "../services/customer.service";
import {
  MatDialog,
} from "@angular/material/dialog";
import {CreateCustomerComponent} from "../create-customer/create-customer.component";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {EditCustomerComponent} from "../edit-customer/edit-customer.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {
  customers: Customer[] = [];
  displayedColumns: string[] = ['id', 'name', 'address', 'phone', 'actions'];

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe(
      (data) => this.customers = data,
      (error) => console.error(error)
    );
  }

  openCreateCustomerModal() {
    const dialogRef = this.dialog.open(CreateCustomerComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customers = [...this.customers, result];
      }
    });
  }

  openEditCustomerModal(customer: Customer) {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      width: '400px',
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result) {
        this.customerService.updateCustomer(result).subscribe(updatedCustomer => {
          this.customers = this.customers.map(c => c.id === updatedCustomer.id ? updatedCustomer : c);

        });
      }
    });
  }

  deleteCustomer(customer: Customer) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this customer?' + customer.name }
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.customerService.deleteCustomer(customer.id).subscribe(() => {
          this.customers = this.customers.filter(c => c.id !== customer.id);
        });
      }
    });
  }

  viewAccounts(customer: Customer) {
    this.router.navigate(['/accounts'], { state: { customer } });
  }

  generateReport(customer: Customer) {

  }
}

