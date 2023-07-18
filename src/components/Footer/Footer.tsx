import styles from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={styles["footer"]}
    >{`Copyright © Tomasz Gołąb ${year}`}</footer>
  );
};

export default Footer;
