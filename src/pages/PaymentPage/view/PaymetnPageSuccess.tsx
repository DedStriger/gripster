import styles from "./PaymentPageView.module.scss";

export default function PaymetnPageSuccess() {
  return (
    <div className={styles.container}>
      <div className={styles.title} style={{ textAlign: "center" }}>
        Заказ успешно создан
      </div>
      <p className={styles.info}>
        В ближайщее время вам на указанную почту придет письмо с подтверждением
        заказа и инструкцией по оплате.
        <b> Спасибо за оказанное доверие!</b>
      </p>
    </div>
  );
}
