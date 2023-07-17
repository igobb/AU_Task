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
  id: string;
  amount: number;
  beneficiary: string;
  account: number;
  address: string;
  date: string;
  description: string;
}
