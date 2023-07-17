import * as yup from "yup";

export const addTransactionSchema = yup.object({
  amount: yup
    .number()
    .required("Amount is required")
    .test(
      "Is positive?",
      "ERROR: The number must be greater than 0!",
      (value) => value > 0
    ),
  account: yup.number().required("You must pass account number"),
  address: yup.string().required("You must pass address"),
  description: yup.string(),
  date: yup.string(),
  id: yup.string(),
});
