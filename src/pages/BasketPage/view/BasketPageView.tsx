import { GrProColor } from '../../../service/basketReducer';
import styles from './BasketPageView.module.scss';
import {ReactComponent as Cross} from '../../../assets/cross.svg';
import { useDispatch } from 'react-redux';
import { DELETE } from '../../../service/constant';
import {PAYMENT_URL} from '../../../utils/links'
import { Link } from 'react-router-dom';

export type BasketPageViewProps = {
    rows: Rows[];
    total: number;
}

type Rows = {
    name: string;
    info: RowsInfo[];
}

type RowsInfo = {
    count: number;
    color?: GrProColor;
    price: number;
}

export default function BasketPageView({rows, total}:BasketPageViewProps){
    const dispatch = useDispatch();
    return(
        <div className={styles.container}>
            {
                rows.map(row => (
                    <div className={styles.row} key={row.name}>
                        <h2 className={styles.name} dangerouslySetInnerHTML={{__html: row.name}} />
                        {row.info.map((i, n) => (
                           <div className={styles.product__row} key={n + 'info'}>
                                <div className={styles.product}>
                                    <span dangerouslySetInnerHTML={{__html: i.count === 0 ? "<b>Нет в корзине :(</b>" : row.name + ' x' + i.count}} />
                                    {i.color && <span className={styles.color} data-color={i.color}></span>}
                                    <span>{i.price} ₽</span>
                                </div>  
                                {i.count > 0 && <Cross color='#fff' className={styles.close} onClick={() => row.name === 'Gripster' ? dispatch({type: DELETE, deleteType: 'gr'}) : dispatch({type: DELETE, deleteType: 'qrpro', color: i.color})} />}
                           </div>
                        ))}
                    </div>
                ))
            }
            <div className={styles.total}>
                <span><b>Итого</b></span>
                <span>{total} ₽</span>
                {total > 0 && <Link className={styles.total__button} to={{pathname: PAYMENT_URL}}>Оплатить</Link>}
            </div>
        </div>
    )
}