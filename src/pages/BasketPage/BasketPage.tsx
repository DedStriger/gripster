import BasketPageView from "./view/BasketPageView";
import { useMemo } from "react";
import { useCore } from "../../hooks/useCore";
import { observer } from "mobx-react-lite";
export default observer(function BasketPage() {
  const {
    basket: { gr, grPro, price, remove, total },
  } = useCore();
  const info = useMemo(
    () => ({
      rows: [
        {
          name: "Gripster",
          info: [
            {
              count: gr.count,
              price: gr.count * price.gr.price,
            },
          ],
        },
        {
          name: "Gripster <span>Pro</span>",
          info:
            grPro.length === 0
              ? [{ count: 0, price: 0 }]
              : grPro.map((i) => ({
                  ...i,
                  price: i.count * price.grPro.price,
                })),
        },
      ],
    }),
    [gr, grPro, price]
  );
  return (
    <BasketPageView total={total.price} remove={remove} rows={info.rows} />
  );
});
