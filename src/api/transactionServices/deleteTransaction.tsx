import { BASE_URL } from "../apiURL";
import { notify } from "./notify";

export const deleteTransaction = async (id: number) => {
  const response = await fetch(`${BASE_URL}transactions/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    notify();
    return {};
  }
  const data = await response.json();
  return data;
};
