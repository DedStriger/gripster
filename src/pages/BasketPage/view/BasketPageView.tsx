import { info } from 'console';
import { GrProColor } from '../../../service/basketReducer';
import styles from './BasketPageView.module.scss';

export type BasketPageViewProps = {
    rows: Rows[];
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

export default function BasketPageView({rows}:BasketPageViewProps){
    return(
        <div className={styles.container}>
            {
                rows.map(row => (
                    <div className={styles.row} key={row.name}>
                        <h2 className={styles.name} dangerouslySetInnerHTML={{__html: row.name}} />
                        {row.info.map(i => (
                            <div className={styles.product}>
                                <span>{i.count}</span>
                                <span>{i.count * i.price}</span>
                            </div>  
                        ))}
                    </div>
                ))
            }
        </div>
    )
}