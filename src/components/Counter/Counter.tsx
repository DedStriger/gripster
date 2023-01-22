import styles from './Counter.module.scss'

export type CounterProps = {
    count: number;
    plus: () => void;
    minus: () => void;
}

export default function Counter({count, plus, minus}:CounterProps){
    return(
        <div className={styles.container}>
            <div className={styles.symbol} onClick={minus}>
               - 
            </div>
            <div className={styles.symbol}>
               {count}
            </div>
            <div className={styles.symbol} onClick={plus}>
               +
            </div>
        </div>
    )
}