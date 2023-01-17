import styles from './Footer.module.scss'

export default function Footer(){
    return(
        <div className={styles.container}>
            <p>@GRIPSTER-PRO.RU {new Date().getFullYear()}</p>
        </div>
    )
}