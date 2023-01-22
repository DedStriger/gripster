import styles from './GripsterPageView.module.scss'
import gripster from '../../../assets/gripster.png';
import gripsterRetina from '../../../assets/gripster@2x.png';
import {useSelector, useDispatch} from 'react-redux';
import Counter from '../../../components/Counter/Counter';
import { rootCount } from '../../../service/countReducer';
import { GR_MINUS, GR_PLUS } from '../../../service/constant';

export default function GripsterPageView(){
    const count = useSelector((store: {count: rootCount}) => store.count.gripster.count)
    const dispatch = useDispatch()
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Gripster</h2>
            <img src={gripster} srcSet={gripsterRetina} className={styles.img} />
            <div className={styles.row}>
                <Counter count={count} plus={() => dispatch({type: GR_PLUS})} minus={() => dispatch({type: GR_MINUS})} />
                <div className={styles.pay}>
                    <div className={styles.price}>
                        <span >999 ₽</span>
                        <span className={styles.price__cross}>1429 ₽</span>
                    </div>
                    <button className={styles.btn} >Купить</button>
                </div>
            </div>
            <div className={styles.head}>Описание и характеристики</div>
        </div>
    )
}