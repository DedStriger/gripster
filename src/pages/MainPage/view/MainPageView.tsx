import styles from './MainPageView.module.scss';
import gripster from '../../../assets/gripster.png';
import gripsterRetina from '../../../assets/gripster@2x.png';
import gripsterPro from '../../../assets/gripster-pro.png';
import gripsterProRetina from '../../../assets/gripster-pro@2x.png';
import { GRIPSTER_URL, GRIPSTER_PRO_URL } from '../../../utils/links';
import Product from '../../../components/Product/Product';

const config = [
    {
        id: 1,
        name: 'Gripster',
        adventages: ['Три уровня нагрузки', 'Удобное крепление на запястье', 'Продвинутый фиксатор пальцев и ладони'],
        img: {x: gripster, x2: gripsterRetina},
        link: GRIPSTER_URL
    },
    {
        id: 2,
        name: 'Gripster <span>Pro</span>',
        adventages: ['Широко регулируемые уровни нагрузки', 'Крепление из плотной ткани с подклаткой', 'Индивидульные крепления для каждго пальца'],
        img: {x: gripsterPro, x2: gripsterProRetina},
        link: GRIPSTER_PRO_URL,
        pro: true,
    },
]

export default function MainPageView(){
    return(
        <div className={styles.container}>
            {config.map(i => <Product key={i.id} {...i} />)}
        </div>
    )
}