import { useSelector } from "react-redux";
import BasketPageView from "./view/BasketPageView";
import { rootBasket } from "../../service/basketReducer";
import { rootCount } from "../../service/countReducer";
import { useMemo } from "react";

export default function BasketPage(){
    const store = useSelector((store: {basket: rootBasket, count: rootCount}) => store);
    const info = useMemo(() => ({
        rows: [
            {name: 'Gripster', info: [{count: store.basket.gr, price: store.basket.gr * store.count.gripster.price}]},
            {name: 'Gripster <span>Pro</span>',  info: store.basket.grPro.length === 0 ? [{count: 0, price: 0}] : store.basket.grPro.map(i => ({...i, price: i.count * store.count.gripsterPro.price}))}
        ]
    }),[store])
    const total = useMemo(() => {
        return  store.basket.gr * store.count.gripster.price + store.basket.grPro.reduce((acc, i) => acc + (i.count * store.count.gripsterPro.price), 0);
    }, [store])
    return <BasketPageView total={total} rows={info.rows} onDelete={() => {}} />
}