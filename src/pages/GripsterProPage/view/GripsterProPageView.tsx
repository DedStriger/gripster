import styles from './GripsterProPageView.module.scss'
import {useSelector, useDispatch} from 'react-redux';
import Counter from '../../../components/Counter/Counter';
import { rootCount } from '../../../service/countReducer';
import { GR_PRO_MINUS, GR_PRO_PLUS, UPDATE_GR_PRO } from '../../../service/constant';
import { useCallback, useState } from 'react';
import Colorpick from '../../../components/Colorpick/Colorpick';
import { GrProColor } from '../../../service/basketReducer';
import advantages from '../../../assets/advantages-pro.png';
import advantagesRetina from '../../../assets/advantages-pro@2x.png';
import variant from '../../../assets/pro-variants.png';
import variantRetina from '../../../assets/pro-variants@2x.png';

export default function GripsterProPageView(){
    const [color, setColor] = useState<GrProColor>('red')
    const count = useSelector((store: {count: rootCount}) => store.count.gripsterPro.count)
    const dispatch = useDispatch()
    const onBuy = useCallback(() => {
        dispatch({type: UPDATE_GR_PRO, number: count, color: color})
    }, [count, color, dispatch])
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Gripster <span>Pro</span></h2>
            <img src={variant} srcSet={variantRetina + ' 2x'} className={styles.img} alt='product' />
            <div className={styles.row}>
                <Counter count={count} plus={() => dispatch({type: GR_PRO_PLUS})} minus={() => dispatch({type: GR_PRO_MINUS})} />
                <Colorpick color={color} setColor={setColor} />
                <div className={styles.pay}>
                    <div className={styles.price}>
                        <span >1399 ₽</span>
                        <span className={styles.price__cross}>1999 ₽</span>
                    </div>
                    <button onClick={onBuy} className={styles.btn} >В корзину</button>
                </div>
            </div>
            <div className={styles.head}>Описание</div>
            <p>С помощью тренажера <b>Gripster Pro</b>, вы сможете максимально качественно усилить мышцы ваших пальцев, предплечья и запястья. В качестве основного материала используется высококачественный силикон, который обладает высокой прочностью на разрыв, практически не подтвергается изломам и деформации.</p>
            <p>Модель Pro обладает улучшенным фиксатором кисти, а также имеет более гибкую настройку степени тяжести под каждый палец в отдельности.</p>
            <p>При помощи нашего тренажера вы сможете без труда и походов в зал поддерживать мышцы рук, или тонизировать их после целого дня в офисе.</p>
            <img className={styles.advantages} src={advantages} srcSet={advantagesRetina + ' 2x'} alt="adv" />
            <div className={styles.head}>Характеристики</div>
            <p><b>Размеры:</b> около 15см Х 15см Х 5см</p>
            <p><b>Вес:</b> 110 грамм</p>
            <p><b>Диаметр отверстий для пальцев:</b> около 1.8 см</p>
            <p><b>Цвета:</b> Бордовый Голубой Зеленый</p>
        </div>
    )
}