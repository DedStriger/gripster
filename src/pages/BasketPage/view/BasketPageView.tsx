import { GrProColor } from '../../../service/basketReducer';
import styles from './BasketPageView.module.scss';

export type BasketPageViewProps = {
    rows: Rows[];
    total: number;
    onDelete: () => void;
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
    return(
        <div className={styles.container}>
            {
                rows.map(row => (
                    <div className={styles.row} key={row.name}>
                        <h2 className={styles.name} dangerouslySetInnerHTML={{__html: row.name}} />
                        {row.info.map((i, n) => (
                            <div className={styles.product} key={n + 'info'}>
                                <span dangerouslySetInnerHTML={{__html: i.count === 0 ? "<b>Нет в корзине :(</b>" : row.name + ' x' + i.count}} />
                                {i.color && <span className={styles.color} data-color={i.color}></span>}
                                <span>{i.price} ₽</span>
                            </div>  
                        ))}
                    </div>
                ))
            }
            <div className={styles.total}>
                <span><b>Итого</b></span>
                <span>{total} ₽</span>
                {total > 0 && <button>Оплатить</button>}
            </div>
        </div>
    )
}