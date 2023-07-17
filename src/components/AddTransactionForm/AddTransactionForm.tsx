import { useFormik } from "formik";
import { AddTransaction } from "../../api/transactionServices/types";
import { addTransaction } from "../../api/transactionServices/addTransaction";
import { v4 as uuid } from "uuid";
import { addTransactionSchema } from "../../api/transactionServices/validation";
import Input from "./Input/Input";
import styles from "./AddTransactionForm.module.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddTransactionForm = () => {
  const date = new Date();

  let currentDay = String(date.getDate()).padStart(2, "0");
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentYear = date.getFullYear();
  let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

  const id: string = uuid();

  const navigate = useNavigate();

  const notify = () => {
    toast.success("Transaction was added! All ok!");
    setTimeout(() => {
      navigate(0);
    }, 3000);
  };

  const formik = useFormik<AddTransaction>({
    initialValues: {
      account: 0,
      address: "",
      amount: 0,
      beneficiary: "",
      date: currentDate,
      description: "",
      id: id,
    },
    onSubmit: (values: AddTransaction) => {
      addTransaction(values);
      notify();
    },
    validationSchema: addTransactionSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles["add-form"]}>
      <Input formik={formik} inputType="number" label="Amount" name="amount" />
      <Input
        formik={formik}
        inputType="number"
        label="Account number"
        name="account"
      />
      <Input
        formik={formik}
        inputType="string"
        label="Address"
        name="address"
      />
      <Input
        formik={formik}
        inputType="string"
        label="Description"
        name="description"
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
