import { FormEvent, useCallback, useState, useRef } from "react";
import styles from "./PaymentPageView.module.scss";
import PaymetnPageSuccess from "./PaymetnPageSuccess";
import PaymetnPageError from "./PaymentPageError";
import { useCore } from "../../../hooks/useCore";
import { PaymentError, PaymentState } from "../../../Core/types";
import { allNames, fields, placeholders } from "./config";
import { observer } from "mobx-react-lite";

export default observer(function PaymentPageView({
  isType,
}: {
  isType: PaymentState | undefined;
}) {
  const [state, setState] = useState(isType || PaymentState.Form);
  const [error, setError] = useState<PaymentError>(undefined);
  const { basket, http } = useCore();
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = useCallback(
    async (e: FormEvent) => {
      setError(undefined);
      e.preventDefault();

      const info = new FormData(e.target as HTMLFormElement);
      const get = (name: string) => info.get(name) as string;
      const values = allNames.reduce(
        (acc, i) => ({ ...acc, [i]: get(i) }),
        {} as Record<string, string>,
      );
      if (Object.values(values).find((i) => i === null)) {
        setError({ place: "common", text: "Остались не заполненые поля!" });
        return;
      }

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(values.email)) {
        setError({ place: "email", text: "Введите корректный email адрес" });
        return;
      }

      if (
        //eslint-disable-next-line
        !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(
          values.phone.toString(),
        )
      ) {
        setError({ place: "phone", text: "Введите корректный номер телефона" });
        return;
      }

      await http
        .post({
          url: "https://gripster-pro.ru/tut/mail.php",
          body: {
            ...values,
            basket: {
              price: basket.price,
              total: basket.total,
              gr: basket.gr,
              grPro: basket.grPro,
            },
          },
        })
        .then(() => {
          setState(PaymentState.Success);
          return Promise.resolve();
        })
        .catch((e) => {
          setState(PaymentState.Error);
          console.log(e);
        });
    },
    [basket],
  );
  if (state === PaymentState.Success) {
    return <PaymetnPageSuccess />;
  }

  if (state === PaymentState.Error) {
    return <PaymetnPageError />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Форма оплаты</div>
      {!!error && <div className={styles.error__text}>{error.text}</div>}
      <form
        className={styles.payment + " form"}
        onSubmit={onSubmit}
        ref={formRef}
        data-form="true"
      >
        {fields.map((_, idx) => (
          <div className={styles.row} key={idx}>
            {_.map((input) => (
              <input
                type="text"
                key={input}
                name={input}
                className={error?.place === input ? styles.error : ""}
                placeholder={placeholders[input as keyof typeof placeholders]}
              />
            ))}
          </div>
        ))}
        <button type="submit">Создать заказ</button>
      </form>
    </div>
  );
});
