export interface Transaction {
  id: number;
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date: string;
  description: string;
}

export interface AddTransaction {
  amount: number;
  account: number;
  address: string;
  date: string;
  description: string;
}

export interface DeleteTransaction {
  id: number;
}
