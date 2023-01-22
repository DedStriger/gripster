import styles from './InfoPage.module.scss'

export type InfoPageProps = {
    title: string;
    paragraphs: string[];
}

export default function InfoPage({title, paragraphs}:InfoPageProps){
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>{title}</h2>
            {paragraphs.map(p => <p key={p} dangerouslySetInnerHTML={{__html: p}} ></p>)}
        </div>
    )
}