import style from "./Logo.module.scss";

import logoPng from "../../../assets/logo.png";

const Logo = () => {
  return (
    <div className={style["logo__container"]}>
      <img src={logoPng}></img>
    </div>
  );
};

export default Logo;
