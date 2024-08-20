import {Transaction} from "./transaction";

export interface Account {
  number: number;
  balance: number;
  transactions: Transaction[];
}
