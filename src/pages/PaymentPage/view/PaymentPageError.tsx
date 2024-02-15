import styles from "./PaymentPageView.module.scss";

export default function PaymetnPageError() {
  return (
    <div className={styles.container} style={{ textAlign: "center" }}>
      <div className={styles.title}>Ошибка</div>
      <p className={styles.info}>
        Произошла неожиданная ошибка! Попробуйте еще раз. В случае повтора,
        напишите в поддержку или дождитесь пока наши специалисты все поправят)
      </p>
    </div>
  );
}
