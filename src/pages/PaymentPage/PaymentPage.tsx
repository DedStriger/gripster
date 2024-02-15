import { Navigate } from "react-router-dom";
import { useBasketTotal } from "../../hooks/useBasketTotal";
import PaymentPageView, { PaymentState } from "./view/PaymentPageView";
import { GRIPSTER_URL } from "../../utils/links";
import { useMemo } from "react";

export default function PaymentPage() {
  const basketTotal = useBasketTotal();

  const isType = useMemo(
    () =>
      window.location.search.includes("s=1")
        ? PaymentState.Success
        : window.location.search.includes("f=1")
          ? PaymentState.Error
          : undefined,
    [],
  );

  if (basketTotal === 0 && !isType) {
    return <Navigate to={GRIPSTER_URL} replace />;
  }

  return <PaymentPageView isType={isType} />;
}
