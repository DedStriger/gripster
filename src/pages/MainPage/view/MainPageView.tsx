import styles from "./MainPageView.module.scss";
import { GRIPSTER_URL, GRIPSTER_PRO_URL } from "../../../utils/links";
import Product from "../../../components/Product/Product";
import {
  GripsterImg,
  GripsterProImg,
  GripsterProRetinaImg,
  GripsterRetinaImg,
} from "../../../assets";
import { observer } from "mobx-react-lite";

const config = [
  {
    id: 1,
    name: "Gripster",
    adventages: [
      "Три уровня нагрузки",
      "Удобное крепление на запястье",
      "Продвинутый фиксатор пальцев и ладони",
    ],
    img: { x: GripsterImg, x2: GripsterRetinaImg },
    link: GRIPSTER_URL,
  },
  {
    id: 2,
    name: "Gripster <span>Pro</span>",
    adventages: [
      "Широко регулируемые уровни нагрузки",
      "Крепление из плотной ткани с подклаткой",
      "Индивидульные крепления для каждго пальца",
    ],
    img: { x: GripsterProImg, x2: GripsterProRetinaImg },
    link: GRIPSTER_PRO_URL,
    pro: true,
  },
];

export default observer(function MainPageView() {
  return (
    <div className={styles.container}>
      {config.map((i) => (
        <Product key={i.id} {...i} />
      ))}
    </div>
  );
});
