import { Link, useNavigate } from "react-router-dom";
import styles from "./Product.module.scss";

export type ProductProps = {
  name: string;
  adventages: string[];
  img: { x: string; x2: string };
  link: string;
  pro?: boolean;
};

export default function Product({
  name,
  adventages,
  img,
  link,
  pro,
}: ProductProps) {
  const navigation = useNavigate();
  return (
    <div className={styles.container}>
      <div
        className={`${styles.card} ${pro && styles.card__pro}`}
        onClick={() => navigation({ pathname: link })}
      >
        <img src={img.x} srcSet={img.x2 + " 2x"} alt="product" />
      </div>
      <div className={styles.content}>
        <Link
          to={{ pathname: link }}
          className={styles.name}
          dangerouslySetInnerHTML={{ __html: name }}
        />
        {adventages.map((a) => (
          <div className={styles.advantages} key={a}>
            <span className={styles.advantages__line}></span>
            <p className={styles.advantages__text}>{a}</p>
          </div>
        ))}
        <Link to={{ pathname: link }} className={styles.button}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}
