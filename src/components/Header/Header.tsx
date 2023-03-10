import styles from './Header.module.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {ReactComponent as Inst} from '../../assets/inst.svg';
import {ReactComponent as Tiktok} from '../../assets/tiktok.svg';
import {ReactComponent as Basket} from '../../assets/basket.svg';
import { DELIVERY_URL, CONTACTS_URL, BASKET_URL } from '../../utils/links';
import { useBasketTotal } from '../../hooks/useBasketTotal';

export default function Header(){
    const basketTotal = useBasketTotal();
    return(
        <>
            <div className={styles.adv}>
                <p>Скидка 30% до конца марта</p>
            </div>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Link to={'/'}>
                        <Logo/>
                    </Link>
                    <div className={styles.social}>
                        <a href="https://instagram.com/gripsterpro.ru?igshid=YmMyMTA2M2Y=" rel="noreferrer" target='_blank'>
                            <Inst/>
                        </a>
                        <a href="https://www.tiktok.com/@gripsterpro.ru" rel="noreferrer" target='_blank'>
                            <Tiktok/>
                        </a>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.menu}>
                        <Link to={{pathname: DELIVERY_URL}} className={styles.menu__item}>
                            Доставка
                        </Link>
                        <Link to={{pathname: CONTACTS_URL}} className={styles.menu__item}>
                            Контакты
                        </Link>
                    </div>
                    <Link to={{pathname: BASKET_URL}} className={styles.basket}>
                        {basketTotal > 0 && <span className={styles.basket__total}>{basketTotal}</span>}
                        <Basket/>
                    </Link>
                </div>
            </div>
        </>
    )
}