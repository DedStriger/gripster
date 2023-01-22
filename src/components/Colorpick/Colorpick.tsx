import styles from './Colorpick.module.scss';

export default function Colorpick(){
    return(
        <div className={styles.container}>
            <div className={`${styles.circle} ${styles.circle__active}`}></div>
            <div className={`${styles.circle}`}></div>
            <div className={`${styles.circle}`}></div>
        </div>
    )
}