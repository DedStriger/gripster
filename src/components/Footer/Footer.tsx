import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { DELIVERY_URL, CONTACTS_URL } from "../../utils/links";

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>@GRIPSTER-PRO.RU {new Date().getFullYear()}</p>
      <div className={styles.menu}>
        <Link to={{ pathname: DELIVERY_URL }} className={styles.menu__item}>
          Доставка
        </Link>
        <Link to={{ pathname: CONTACTS_URL }} className={styles.menu__item}>
          Контакты
        </Link>
      </div>
    </div>
  );
}
