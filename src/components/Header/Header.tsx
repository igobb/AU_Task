import style from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className={style["header__container"]}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
