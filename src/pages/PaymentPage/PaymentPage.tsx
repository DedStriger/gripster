import { Navigate } from "react-router-dom";
import PaymentPageView from "./view/PaymentPageView";
import { GRIPSTER_URL } from "../../utils/links";
import { useMemo } from "react";
import { useCore } from "../../hooks/useCore";
import { PaymentState } from "../../Core/types";
import { observer } from "mobx-react-lite";

export default observer(function PaymentPage() {
  const { basket } = useCore();
  const isType = useMemo(
    () =>
      window.location.search.includes("s=1")
        ? PaymentState.Success
        : window.location.search.includes("f=1")
          ? PaymentState.Error
          : undefined,
    [],
  );

  if (basket.total.count === 0 && !isType) {
    return <Navigate to={GRIPSTER_URL} replace />;
  }

  return <PaymentPageView isType={isType} />;
});
