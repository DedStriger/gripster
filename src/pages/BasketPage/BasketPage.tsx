import BasketPageView from "./view/BasketPageView";
import { useMemo } from "react";
import { useCore } from "../../hooks/useCore";
import { observer } from "mobx-react-lite";
export default observer(function BasketPage() {
  const { basket } = useCore();
  const info = useMemo(
    () => ({
      rows: [
        {
          name: "Gripster",
          info: [
            {
              count: basket.gr.count,
              price: basket.gr.count * basket.price.gr.price,
            },
          ],
        },
        {
          name: "Gripster <span>Pro</span>",
          info:
            basket.grPro.length === 0
              ? [{ count: 0, price: 0 }]
              : basket.grPro.map((i) => ({
                  ...i,
                  price: i.count * basket.price.grPro.price,
                })),
        },
      ],
    }),
    [basket],
  );
  return (
    <BasketPageView
      total={basket.total.price}
      remove={basket.delete}
      rows={info.rows}
    />
  );
});
