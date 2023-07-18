import * as yup from "yup";

export const addTransactionSchema = yup.object({
  amount: yup
    .number()
    .required("You must pass amount!!")
    .test(
      "Is positive?",
      "ERROR: The number must be greater than 0!",
      (value) => value > 0
    ),
  account: yup.number().required("You must pass account number!"),
  address: yup.string().required("You must pass address!"),
  description: yup.string().required("You must pass description!"),
});

export const deleteTransactionSchema = yup.object({
  id: yup
    .number()
    .required("ID is required")
    .test(
      "Is positive?",
      "ERROR: The number must be equal or greater than 0!",
      (value) => value >= 0
    ),
});
