import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:8081/customers';

  constructor(private http: HttpClient) {

  }

  // Get all customers
  getCustomers(): Observable<Customer[]> {
    console.log('Getting customers');
    return this.http.get<Customer[]>(this.apiUrl);
  }

  // Create a new customer with an account
  createCustomerWithAccount(command: any): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, command);
  }

  // Create a new account for an existing customer
  createNewAccount(customerId: string): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/${customerId}/accounts`, {});
  }

  // Update an existing customer
  updateCustomer(command: any): Observable<Customer> {
    return this.http.put<Customer>(this.apiUrl, command);
  }

  // Update an account for an existing customer
  updateCustomerAccount(command: any): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/accounts`, command);
  }

  // Make a deposit into a customer's account
  makeAccountDeposit(command: any): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/accounts/deposit`, command);
  }

  // Make a withdrawal from a customer's account
  makeAccountWithdraw(command: any): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/accounts/withdraw`, command);
  }

  // Delete a specific account from a customer
  deleteAccount(customerId: string, accountId: number): Observable<Customer> {
    return this.http.delete<Customer>(`${this.apiUrl}/${customerId}/accounts/${accountId}`);
  }

  // Delete a customer
  deleteCustomer(customerId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${customerId}`);
  }
}
