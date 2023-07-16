import { useState } from "react";
import styles from "./Filter.module.scss";

const Filter = ({ callback }) => {
  const [innerValue, setInnerValue] = useState("");
  console.log(innerValue);
  const handleSubmit = (e: event) => {
    e.preventDefault();
    callback(innerValue);
  };
  return (
    <form onSubmit={handleSubmit} className={styles["searchInput"]}>
      <input
        type="text"
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        placeholder="Enter the beneficiary you want to find and press 'enter' to confirm."
      />
    </form>
  );
};

export default Filter;
