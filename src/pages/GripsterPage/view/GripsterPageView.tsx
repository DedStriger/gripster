import styles from './GripsterPageView.module.scss'
import gripster from '../../../assets/gripster.png';
import gripsterRetina from '../../../assets/gripster@2x.png';
import advantages from '../../../assets/advantages.png';
import advantagesRetina from '../../../assets/advantages@2x.png';
import {useSelector, useDispatch} from 'react-redux';
import Counter from '../../../components/Counter/Counter';
import { rootCount } from '../../../service/countReducer';
import { GR_MINUS, GR_PLUS, UPDATE_GR } from '../../../service/constant';
import { useCallback } from 'react';

export default function GripsterPageView(){
    const count = useSelector((store: {count: rootCount}) => store.count.gripster.count)
    const dispatch = useDispatch()
    const onBuy = useCallback(() => {
        dispatch({type: UPDATE_GR, number: count})
    }, [count, dispatch])
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Gripster</h2>
            <img src={gripster} srcSet={gripsterRetina + ' 2x'} className={styles.img} alt='product' />
            <div className={styles.row}>
                <Counter count={count} plus={() => dispatch({type: GR_PLUS})} minus={() => dispatch({type: GR_MINUS})} />
                <div className={styles.pay}>
                    <div className={styles.price}>
                        <span >999 ₽</span>
                        <span className={styles.price__cross}>1429 ₽</span>
                    </div>
                    <button onClick={onBuy} className={styles.btn} >В корзину</button>
                </div>
            </div>
            <div className={styles.head}>Описание</div>
            <p>С помощью тренажера <b>Gripster</b>, вы сможете максимально качественно усилить мышцы ваших пальцев, предплечья и запястья. В качестве основного материала используется высококачественный силикон, который обладает высокой прочностью на разрыв, практически не подтвергается изломам и деформации.</p>
            <p>При помощи нашего тренажера вы сможете без труда и походов в зал поддерживать мышцы рук, или тонизировать их после целого дня в офисе.</p>
            <img className={styles.advantages} src={advantages} srcSet={advantagesRetina + ' 2x'} alt="adv" />
            <div className={styles.head}>Характеристики</div>
            <p><b>Размеры:</b> около 11см Х 10см Х 5см</p>
            <p><b>Вес:</b> 37-45 грамм</p>
            <p><b>Диаметр отверстий для пальцев:</b> около 1.8 см</p>
            <p><b>Цвет:</b> Черный</p>
        </div>
    )
}