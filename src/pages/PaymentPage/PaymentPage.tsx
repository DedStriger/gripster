import { Navigate } from "react-router-dom";
import { useBasketTotal } from "../../hooks/useBasketTotal";
import PaymentPageView from "./view/PaymentPageView";
import {GRIPSTER_URL} from '../../utils/links';

export default function PaymentPage(){
    const basketTotal = useBasketTotal();

    if(basketTotal === 0){
        return <Navigate to={GRIPSTER_URL} replace />
    }

    return <PaymentPageView/>
}