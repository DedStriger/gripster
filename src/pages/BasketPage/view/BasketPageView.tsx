import styles from "./BasketPageView.module.scss";
import { PAYMENT_URL } from "../../../utils/links";
import { Link } from "react-router-dom";
import { CrossSvg } from "../../../assets";
import { GrColor, GRKind } from "../../../Core/types";
import { observer } from "mobx-react-lite";
export type BasketPageViewProps = {
  rows: Rows[];
  total: number;
  remove: (type: GRKind, color?: GrColor) => void;
};

type Rows = {
  name: string;
  info: RowsInfo[];
};

type RowsInfo = {
  count: number;
  color?: GrColor;
  price: number;
};

export default observer(function BasketPageView({
  rows,
  total,
  remove,
}: BasketPageViewProps) {
  return (
    <div className={styles.container}>
      {rows.map((row) => (
        <div className={styles.row} key={row.name}>
          <h2
            className={styles.name}
            dangerouslySetInnerHTML={{ __html: row.name }}
          />
          {row.info.map((i, n) => (
            <div className={styles.product__row} key={n + "info"}>
              <div className={styles.product}>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      i.count === 0
                        ? "<b>Нет в корзине :(</b>"
                        : row.name + " x" + i.count,
                  }}
                />
                {i.color && (
                  <span className={styles.color} data-color={i.color}></span>
                )}
                <span>{i.price} ₽</span>
              </div>
              {i.count > 0 && (
                <CrossSvg
                  color="#fff"
                  className={styles.close}
                  onClick={() =>
                    row.name === "Gripster"
                      ? remove("gr")
                      : remove("gr", i.color)
                  }
                />
              )}
            </div>
          ))}
        </div>
      ))}
      <div className={styles.total}>
        <span>
          <b>Итого</b>
        </span>
        <span>{total} ₽</span>
        {total > 0 && (
          <Link className={styles.total__button} to={{ pathname: PAYMENT_URL }}>
            Оплатить
          </Link>
        )}
      </div>
    </div>
  );
});
