import styles from './GripsterProPageView.module.scss'
import gripster from '../../../assets/gripster-pro.png';
import gripsterRetina from '../../../assets/gripster-pro@2x.png';
import {useSelector, useDispatch} from 'react-redux';
import Counter from '../../../components/Counter/Counter';
import { rootCount } from '../../../service/countReducer';
import { GR_PRO_MINUS, GR_PRO_PLUS, UPDATE_GR_PRO } from '../../../service/constant';
import { useCallback, useState } from 'react';
import Colorpick from '../../../components/Colorpick/Colorpick';
import { GrProColor } from '../../../service/basketReducer';

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
            <img src={gripster} srcSet={gripsterRetina} className={styles.img} alt='product' />
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
            <div className={styles.head}>Описание и характеристики</div>
        </div>
    )
}