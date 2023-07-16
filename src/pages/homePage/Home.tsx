import TableOfTransactions from "../../components/Transactions/TableOfTransactions/TableOfTransactions";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles["homepage__wrapper"]}>
      <div></div>
      <div className={styles["table"]}>
        <TableOfTransactions />
      </div>
    </div>
  );
};

export default Home;
