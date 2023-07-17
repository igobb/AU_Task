import { useState } from "react";
import TableOfTransactions from "../../components/Transactions/TableOfTransactions/TableOfTransactions";
import styles from "./Home.module.scss";
import Filter from "../../components/Transactions/Filter/Filter";
import AddTransactionForm from "../../components/AddTransactionForm/AddTransactionForm";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  return (
    <div className={styles["homepage__wrapper"]}>
      <div className={styles["top__wrapper"]}>
        <div className={styles["left-side__wrapper"]}>
          <div className={styles["balance__wrapper"]}>Balance delete?</div>
          <div className={styles["filter__wrapper"]}>
            <Filter
              callback={(searchValue: string) => setSearchValue(searchValue)}
            />
          </div>
        </div>
        <div className={styles["right-side__wrapper"]}>
          <div className={styles["add-form__wrapper"]}>
            <AddTransactionForm />
          </div>
        </div>
      </div>
      <div className={styles["table"]}>
        <TableOfTransactions searchValue={searchValue} />
      </div>
    </div>
  );
};

export default Home;
