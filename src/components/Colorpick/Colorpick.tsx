import { GrProColor } from '../../service/basketReducer';
import styles from './Colorpick.module.scss';

export type ColorpickProps = {
    setColor: (val: GrProColor) => void;
    color: GrProColor;
}

export default function Colorpick({setColor, color}:ColorpickProps){
    return(
        <div className={styles.container}>
            <div onClick={() => setColor('red')} className={`${styles.circle} ${color === 'red' && styles.circle__active}`}></div>
            <div onClick={() => setColor('blue')} className={`${styles.circle} ${color === 'blue' && styles.circle__active}`}></div>
            <div onClick={() => setColor('green')} className={`${styles.circle} ${color === 'green' && styles.circle__active}`}></div>
        </div>
    )
}