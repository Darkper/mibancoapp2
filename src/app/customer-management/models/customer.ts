import {Account} from "./account";

export interface Customer {
  id: string;
  name: string;
  address: string;
  phone: string;
  accounts: Account[];
}
