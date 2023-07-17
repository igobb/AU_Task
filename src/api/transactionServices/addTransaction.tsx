import { AddTransaction } from "./types";
import { BASE_URL } from "../apiURL";
import { notify } from "./notify";

export const addTransaction = async (transaction: AddTransaction) => {
  const response = await fetch(`${BASE_URL}transactions`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(transaction),
  });
  if (!response.ok) {
    notify();
    return {};
  }
  const data = await response.json();
  return data;
};
