import { useSelector } from "react-redux";
import { rootBasket } from "../service/basketReducer";
import { useMemo } from "react";

export const useBasketTotal = () => {
  const basket = useSelector((store: { basket: rootBasket }) => store.basket);
  return useMemo(
    () => basket.gr + basket.grPro.reduce((acc, i) => acc + i.count, 0),
    [basket],
  );
};
