import { useFormik } from "formik";
import { DeleteTransaction } from "../../api/transactionServices/types";
import { deleteTransaction } from "../../api/transactionServices/deleteTransaction";
import { deleteTransactionSchema } from "../../api/transactionServices/validation";
import Input from "../Input/Input";
import styles from "./DeleteTransactionForm.module.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DeleteTransactionForm = () => {
  const navigate = useNavigate();

  const notify = () => {
    toast.success("Transaction was deleted! All ok!");
    setTimeout(() => {
      navigate(0);
    }, 3000);
  };

  const formik = useFormik<DeleteTransaction>({
    initialValues: {
      id: 0,
    },
    onSubmit: (values: DeleteTransaction) => {
      deleteTransaction(values.id);
      notify();
    },
    validationSchema: deleteTransactionSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles["delete-form"]}>
      <Input
        formik={formik}
        inputType="number"
        label="ID of transaction to delete"
        name="id"
      />
      <button type="submit">Delete Transaction</button>
    </form>
  );
};

export default DeleteTransactionForm;
