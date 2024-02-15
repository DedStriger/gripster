import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(1);
  return {
    count,
    plus: () => setCount((prev) => (prev++ > 10 ? prev++ : prev)),
    minus: () => setCount((prev) => (prev-- < 1 ? prev : prev--)),
  };
};
