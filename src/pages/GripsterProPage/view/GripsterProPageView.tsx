import styles from "./GripsterProPageView.module.scss";
import Counter from "../../../components/Counter/Counter";
import { useCallback, useState } from "react";
import Colorpick from "../../../components/Colorpick/Colorpick";
import {
  AdvantagesProImg,
  AdvantagesProRetinaImg,
  VariantsProImg,
  VariantsProRetinaImg,
} from "../../../assets";
import { useCount } from "../../../hooks/useCount";
import { GrColor } from "../../../Core/types";
import { useCore } from "../../../hooks/useCore";
import { observer } from "mobx-react-lite";
export default observer(function GripsterProPageView() {
  const {
    basket: { update, price },
  } = useCore();
  const [color, setColor] = useState<GrColor>("red");
  const { count, plus, minus } = useCount();
  const onBuy = useCallback(() => {
    update("grPro", count, color);
  }, [count, color, update]);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Gripster <span>Pro</span>
      </h2>
      <img
        src={VariantsProImg}
        srcSet={VariantsProRetinaImg + " 2x"}
        className={styles.img}
        alt="product"
      />
      <div className={styles.row}>
        <Counter count={count} plus={plus} minus={minus} />
        <Colorpick color={color} setColor={setColor} />
        <div className={styles.pay}>
          <div className={styles.price}>
            <span>{price.grPro.price} ₽</span>
            <span className={styles.price__cross}>
              {price.grPro.oldPrice} ₽
            </span>
          </div>
          <button onClick={onBuy} className={styles.btn}>
            В корзину
          </button>
        </div>
      </div>
      <div className={styles.head}>Описание</div>
      <p>
        С помощью тренажера <b>Gripster Pro</b>, вы сможете максимально
        качественно усилить мышцы ваших пальцев, предплечья и запястья. В
        качестве основного материала используется высококачественный силикон,
        который обладает высокой прочностью на разрыв, практически не
        подтвергается изломам и деформации.
      </p>
      <p>
        Модель Pro обладает улучшенным фиксатором кисти, а также имеет более
        гибкую настройку степени тяжести под каждый палец в отдельности.
      </p>
      <p>
        При помощи нашего тренажера вы сможете без труда и походов в зал
        поддерживать мышцы рук, или тонизировать их после целого дня в офисе.
      </p>
      <img
        className={styles.advantages}
        src={AdvantagesProImg}
        srcSet={AdvantagesProRetinaImg + " 2x"}
        alt="adv"
      />
      <div className={styles.head}>Характеристики</div>
      <p>
        <b>Размеры:</b> около 15см Х 15см Х 5см
      </p>
      <p>
        <b>Вес:</b> 110 грамм
      </p>
      <p>
        <b>Диаметр отверстий для пальцев:</b> около 1.8 см
      </p>
      <p>
        <b>Цвета:</b> Бордовый Голубой Зеленый
      </p>
    </div>
  );
});
