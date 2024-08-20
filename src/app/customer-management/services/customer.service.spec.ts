import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomerService } from './customer.service';
import { Customer } from '../models/customer';

describe('CustomerService', () => {
  let service: CustomerService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:8081/customers';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
    });

    service = TestBed.inject(CustomerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get all customers', () => {
    const dummyCustomers: Customer[] = [
      { id: '1', name: 'John Doe', address: '123 Main St', phone: '555-1234', accounts: [] },
      { id: '2', name: 'Jane Doe', address: '456 Oak St', phone: '555-5678', accounts: [] }
    ];

    service.getCustomers().subscribe(customers => {
      expect(customers.length).toBe(2);
      expect(customers).toEqual(dummyCustomers);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCustomers);
  });

  it('should create a new customer with an account', () => {
    const newCustomer: Customer = { id: '3', name: 'Sam Smith', address: '789 Pine St', phone: '555-8765', accounts: [] };
    const command = { name: 'Sam Smith', address: '789 Pine St', phone: '555-8765' };

    service.createCustomerWithAccount(command).subscribe(customer => {
      expect(customer).toEqual(newCustomer);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(command);
    req.flush(newCustomer);
  });


  it('should create a new account for an existing customer', () => {
    const customerId = '1';
    const updatedCustomer: Customer = { id: '1', name: 'John Doe', address: '123 Main St', phone: '555-1234', accounts: [] };

    service.createNewAccount(customerId).subscribe(customer => {
      expect(customer).toEqual(updatedCustomer);
    });

    const req = httpMock.expectOne(`${apiUrl}/${customerId}/accounts`);
    expect(req.request.method).toBe('POST');
    req.flush(updatedCustomer);
  });


  it('should update an existing customer', () => {
    const updatedCustomer: Customer = { id: '1', name: 'John Doe Updated', address: '123 Main St', phone: '555-1234', accounts: [] };
    const command = { id: '1', name: 'John Doe Updated' };

    service.updateCustomer(command).subscribe(customer => {
      expect(customer).toEqual(updatedCustomer);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(command);
    req.flush(updatedCustomer);
  });


  it('should update an account for an existing customer', () => {
    const updatedCustomer: Customer = { id: '1', name: 'John Doe', address: '123 Main St', phone: '555-1234', accounts: [] };
    const command = { accountId: 1, balance: 2000 };

    service.updateCustomerAccount(command).subscribe(customer => {
      expect(customer).toEqual(updatedCustomer);
    });

    const req = httpMock.expectOne(`${apiUrl}/accounts`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(command);
    req.flush(updatedCustomer);
  });


  it('should make a deposit into a customer\'s account', () => {
    const updatedCustomer: Customer = { id: '1', name: 'John Doe', address: '123 Main St', phone: '555-1234', accounts: [] };
    const command = { accountId: 1, amount: 500 };

    service.makeAccountDeposit(command).subscribe(customer => {
      expect(customer).toEqual(updatedCustomer);
    });

    const req = httpMock.expectOne(`${apiUrl}/accounts/deposit`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(command);
    req.flush(updatedCustomer);
  });


  it('should make a withdrawal from a customer\'s account', () => {
    const updatedCustomer: Customer = { id: '1', name: 'John Doe', address: '123 Main St', phone: '555-1234', accounts: [] };
    const command = { accountId: 1, amount: 200 };

    service.makeAccountWithdraw(command).subscribe(customer => {
      expect(customer).toEqual(updatedCustomer);
    });

    const req = httpMock.expectOne(`${apiUrl}/accounts/withdraw`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(command);
    req.flush(updatedCustomer);
  });

  it('should delete a specific account from a customer', () => {
    const customerId = '1';
    const accountId = 1;
    const updatedCustomer: Customer = { id: '1', name: 'John Doe', address: '123 Main St', phone: '555-1234', accounts: [] };

    service.deleteAccount(customerId, accountId).subscribe(customer => {
      expect(customer).toEqual(updatedCustomer);
    });

    const req = httpMock.expectOne(`${apiUrl}/${customerId}/accounts/${accountId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(updatedCustomer);
  });

});
