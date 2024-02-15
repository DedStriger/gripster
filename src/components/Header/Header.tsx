import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { DELIVERY_URL, CONTACTS_URL, BASKET_URL } from "../../utils/links";
import { useBasketTotal } from "../../hooks/useBasketTotal";
import { externalLinks } from "../../utils/externalLinks";
import { BasketSvg, InstSvg, LogoSvg, VkSvg } from "../../assets";

export default function Header() {
  const basketTotal = useBasketTotal();
  return (
    <>
      <div className={styles.adv}>
        <p>Скидка 30% до конца года</p>
      </div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Link to={"/"}>
            <LogoSvg />
          </Link>
          <div className={styles.social}>
            <a href={externalLinks.instagram} rel="noreferrer" target="_blank">
              <InstSvg />
            </a>
            <a href={externalLinks.vk} rel="noreferrer" target="_blank">
              <VkSvg />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.menu}>
            <Link to={{ pathname: DELIVERY_URL }} className={styles.menu__item}>
              Доставка
            </Link>
            <Link to={{ pathname: CONTACTS_URL }} className={styles.menu__item}>
              Контакты
            </Link>
          </div>
          <Link to={{ pathname: BASKET_URL }} className={styles.basket}>
            {basketTotal > 0 && (
              <span className={styles.basket__total}>{basketTotal}</span>
            )}
            <BasketSvg />
          </Link>
        </div>
      </div>
    </>
  );
}
