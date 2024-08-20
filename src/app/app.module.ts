import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerHomeComponent } from './customer-management/customer-home/customer-home.component';
import {HttpClientModule} from "@angular/common/http";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import { CreateCustomerComponent } from './customer-management/create-customer/create-customer.component';
import {MatDialogActions, MatDialogModule, MatDialogTitle} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import { ConfirmDialogComponent } from './customer-management/confirm-dialog/confirm-dialog.component';
import { EditCustomerComponent } from './customer-management/edit-customer/edit-customer.component';
import { AccountListComponent } from './customer-management/account-list/account-list.component';
import {MatTooltip} from "@angular/material/tooltip";
import { CreateMovementComponent } from './customer-management/create-movement/create-movement.component';
import { EditAccountComponent } from './customer-management/edit-account/edit-account.component';
import { InfoDialogComponent } from './customer-management/info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerHomeComponent,
    CreateCustomerComponent,
    ConfirmDialogComponent,
    EditCustomerComponent,
    AccountListComponent,
    CreateMovementComponent,
    EditAccountComponent,
    InfoDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatButton,
    MatToolbar,
    MatButtonModule,
    MatDialogTitle,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltip
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
