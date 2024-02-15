import { observer } from "mobx-react-lite";
import styles from "./BlogShell.module.scss";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { GRIPSTER_PRO_URL, GRIPSTER_URL } from "../../utils/links";
import {
  GripsterImg,
  GripsterProImg,
  GripsterProRetinaImg,
  GripsterRetinaImg,
} from "../../assets";
import clsx from "clsx";

type BlogShellProps = PropsWithChildren;
export default observer(function BlogShell({ children }: BlogShellProps) {
  const navigation = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.promo}>
        <div
          className={styles.promo__item}
          onClick={() => navigation({ pathname: GRIPSTER_URL })}
        >
          <img
            src={GripsterImg}
            srcSet={GripsterRetinaImg + " 2x"}
            alt="gripster"
          />
          <h2>Gripster</h2>
        </div>
        <div
          className={clsx(styles.promo__item, styles.promo__item_glow)}
          onClick={() => navigation({ pathname: GRIPSTER_PRO_URL })}
        >
          <img
            src={GripsterProImg}
            srcSet={GripsterProRetinaImg}
            alt="gripster prop"
          />
          <h2>
            Gripster <span>Pro</span>
          </h2>
        </div>
      </div>
      <div className={styles.articles}>{children}</div>
    </div>
  );
});
