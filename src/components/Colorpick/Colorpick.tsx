import styles from "./Colorpick.module.scss";
import { GrColor } from "../../Core/types";

export type ColorpickProps = {
  setColor: (val: GrColor) => void;
  color: GrColor;
};

export default function Colorpick({ setColor, color }: ColorpickProps) {
  return (
    <div className={styles.container}>
      <div
        onClick={() => setColor("red")}
        className={`${styles.circle} ${color === "red" && styles.circle__active}`}
      ></div>
      <div
        onClick={() => setColor("blue")}
        className={`${styles.circle} ${color === "blue" && styles.circle__active}`}
      ></div>
      <div
        onClick={() => setColor("green")}
        className={`${styles.circle} ${color === "green" && styles.circle__active}`}
      ></div>
    </div>
  );
}
