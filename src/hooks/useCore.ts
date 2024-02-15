import { useContext } from "react";
import { CoreContext } from "../Core/CoreProvider";

export const useCore = () => {
  const core = useContext(CoreContext);

  if (!core) {
    throw new Error("`useCore` has to be used within <CoreContext.Provider>");
  }

  return core;
};
