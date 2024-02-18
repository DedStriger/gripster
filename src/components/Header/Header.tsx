import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import {
  DELIVERY_URL,
  CONTACTS_URL,
  BASKET_URL,
  BLOG_URL,
} from "../../utils/links";
import { externalLinks } from "../../utils/externalLinks";
import { BasketSvg, BurgerSvg, LogoSvg, VkSvg, YouTubeSvg } from "../../assets";
import { useCore } from "../../hooks/useCore";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import clsx from "clsx";
export default observer(function Header() {
  const {
    basket: { total },
  } = useCore();
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <style>{`body, html{overflow: hidden;}`}</style>}
      <div className={styles.adv}>
        <p>Скидка 30% до конца года</p>
      </div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Link to={"/"}>
            <LogoSvg />
          </Link>
          <div className={styles.social}>
            <a href={externalLinks.youTube} rel="noreferrer" target="_blank">
              <YouTubeSvg />
            </a>
            <a href={externalLinks.vk} rel="noreferrer" target="_blank">
              <VkSvg />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.menu}>
            <Link to={{ pathname: BLOG_URL }} className={styles.menu__item}>
              Блог
            </Link>
            <Link to={{ pathname: DELIVERY_URL }} className={styles.menu__item}>
              Доставка
            </Link>
            <Link to={{ pathname: CONTACTS_URL }} className={styles.menu__item}>
              Контакты
            </Link>
          </div>
          <Link to={{ pathname: BASKET_URL }} className={styles.basket}>
            {total.count > 0 && (
              <span className={styles.basket__total}>{total.count}</span>
            )}
            <BasketSvg />
          </Link>
        </div>
        <div className={styles.mob}>
          <Link to={{ pathname: BASKET_URL }} className={styles.basket}>
            {total.count > 0 && (
              <span className={styles.basket__total}>{total.count}</span>
            )}
            <BasketSvg />
          </Link>
          <BurgerSvg
            onClick={() => setShow((prev) => !prev)}
            color="#fff"
            className={clsx(styles.burger, show && styles.active)}
          />
        </div>
        <div
          className={clsx(styles.mob_menu, show && styles.mob_menu__active)}
          onClick={() => setShow(false)}
        >
          <Link to={{ pathname: BLOG_URL }} className={styles.menu__item}>
            Блог
          </Link>
          <Link to={{ pathname: DELIVERY_URL }} className={styles.menu__item}>
            Доставка
          </Link>
          <Link to={{ pathname: CONTACTS_URL }} className={styles.menu__item}>
            Контакты
          </Link>
          <div className={styles.social}>
            <a href={externalLinks.youTube} rel="noreferrer" target="_blank">
              <YouTubeSvg />
            </a>
            <a href={externalLinks.vk} rel="noreferrer" target="_blank">
              <VkSvg />
            </a>
          </div>
        </div>
      </div>
    </>
  );
});
