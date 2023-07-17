import { BASE_URL } from "../apiURL";
import { notify } from "./notify";
import { Transaction } from "./types";

export const getAllTransactions = async () => {
  const response = await fetch(`${BASE_URL}transactions`);
  if (!response.ok) {
    notify();
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data as Transaction[];
};
