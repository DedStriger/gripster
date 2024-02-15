import styles from "./GripsterPageView.module.scss";
import Counter from "../../../components/Counter/Counter";
import { useCallback } from "react";
import {
  AdvantagesImg,
  AdvantagesRetinaImg,
  GripsterImg,
  GripsterRetinaImg,
} from "../../../assets";
import { useCore } from "../../../hooks/useCore";
import { useCount } from "../../../hooks/useCount";
import { observer } from "mobx-react-lite";

export default observer(function GripsterPageView() {
  const {
    basket: { update, price },
  } = useCore();
  const { count, plus, minus } = useCount();
  const onBuy = useCallback(() => {
    update("gr", count);
  }, [count, update]);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gripster</h2>
      <img
        src={GripsterImg}
        srcSet={GripsterRetinaImg + " 2x"}
        className={styles.img}
        alt="product"
      />
      <div className={styles.row}>
        <Counter count={count} plus={plus} minus={minus} />
        <div className={styles.pay}>
          <div className={styles.price}>
            <span>{price.gr.price} ₽</span>
            <span className={styles.price__cross}>{price.gr.oldPrice} ₽</span>
          </div>
          <button onClick={onBuy} className={styles.btn}>
            В корзину
          </button>
        </div>
      </div>
      <div className={styles.head}>Описание</div>
      <p>
        С помощью тренажера <b>Gripster</b>, вы сможете максимально качественно
        усилить мышцы ваших пальцев, предплечья и запястья. В качестве основного
        материала используется высококачественный силикон, который обладает
        высокой прочностью на разрыв, практически не подтвергается изломам и
        деформации.
      </p>
      <p>
        При помощи нашего тренажера вы сможете без труда и походов в зал
        поддерживать мышцы рук, или тонизировать их после целого дня в офисе.
      </p>
      <img
        className={styles.advantages}
        src={AdvantagesImg}
        srcSet={AdvantagesRetinaImg + " 2x"}
        alt="adv"
      />
      <div className={styles.head}>Характеристики</div>
      <p>
        <b>Размеры:</b> около 11см Х 10см Х 5см
      </p>
      <p>
        <b>Вес:</b> 37-45 грамм
      </p>
      <p>
        <b>Диаметр отверстий для пальцев:</b> около 1.8 см
      </p>
      <p>
        <b>Цвет:</b> Черный
      </p>
    </div>
  );
});
