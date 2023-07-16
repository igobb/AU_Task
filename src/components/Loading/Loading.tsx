import styles from "./Loading.module.scss";

import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className={styles["loading__container"]}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loading;
