import { Component, OnInit, Inject } from '@angular/core';
import { Router} from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Account } from '../models/account'; // Asegúrate de tener el modelo Account
import { Customer } from '../models/customer';
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateMovementComponent} from "../create-movement/create-movement.component";
import {EditAccountComponent} from "../edit-account/edit-account.component";
import {InfoDialogComponent} from "../info-dialog/info-dialog.component"; // Asegúrate de tener el modelo Customer

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  customer!: Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private dialog: MatDialog,


  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.customer = navigation.extras.state['customer'];
    }else {
      this.goBack()
    }
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/customer-home']);
  }


  openCreateAccountModal() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to create account to this customer?' + this.customer.name }
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.customerService.createNewAccount(this.customer.id).subscribe(result => {
          this.customer = result;
        });
      }
    });
  }

  openDepositModal(account: Account) {
    const dialogRef = this.dialog.open(CreateMovementComponent, {
      width: '400px',
      data: { account, customerId: this.customer.id, message: "Make a deposit" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.makeAccountDeposit(result).subscribe(result => {
          if (result) {
            this.customer.accounts = result.accounts;
            console.log('Movimiento creado:', result);
          }
        })
      }
    });
  }

  openWithdrawModal(account: Account) {
    const dialogRef = this.dialog.open(CreateMovementComponent, {
      width: '400px',
      data: { account, customerId: this.customer.id, message: "Make a withdraw" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.makeAccountWithdraw(result).subscribe(result => {
          if (result) {
            this.customer.accounts = result.accounts;
          }
        }, error => {
          this.showInfoDialog('Withdraw error', error.error.message);
        })
      }
    });

  }

  openEditAccountModal(account: Account): void {
    const dialogRef = this.dialog.open(EditAccountComponent, {
      width: '400px',
      data: { account, customerId: this.customer.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.updateCustomerAccount(result).subscribe(updatedAccount => {
          this.customer = updatedAccount;
        });
      }
    });
  }

  deleteAccount(account: Account) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this account?' + account.number }
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.customerService.deleteAccount(this.customer.id, account.number).subscribe(() => {
          this.customer.accounts = this.customer.accounts.filter(c => c.number !== account.number);
        });
      }
    });
  }

  public showInfoDialog(title: string, message: string) {
    this.dialog.open(InfoDialogComponent, {
      width: '300px',
      data: { title, message }
    });
  }
}
