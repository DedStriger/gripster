import { action, computed, makeObservable, observable } from "mobx";
import { GR, GrColor, GRKind } from "./types";

const INITIAL_GR = { count: 0, color: undefined };
export class Basket {
  @observable private _gr: GR = INITIAL_GR;
  @observable private _grPro: GR[] = [];

  price = {
    gr: {
      price: 999,
      oldPrice: 1429,
    },
    grPro: {
      price: 1399,
      oldPrice: 1999,
    },
  };
  constructor() {
    makeObservable(this);
  }

  get gr() {
    return this._gr;
  }

  get grPro() {
    return this._grPro;
  }

  @computed
  get total() {
    return {
      count: this._gr.count + this._grPro.reduce((acc, i) => acc + i.count, 0),
      price:
        this._gr.count * this.price.gr.price +
        this._grPro.reduce(
          (acc, i) => acc + i.count * this.price.grPro.price,
          0,
        ),
    };
  }

  @action.bound
  update(type: GRKind, value: number, color?: GrColor) {
    if (type === "gr") {
      const _new = this._gr.count + value;
      if (_new <= 10 && _new >= 1) {
        this._gr.count = _new;
      }
    }

    if (type === "grPro" && color) {
      if (this._grPro.find((i) => i.color === color)) {
        this._grPro = this._grPro.map((i) => {
          const count = value + i.count;
          if (i.color === color && count <= 10 && count >= 1) {
            return { ...i, count };
          }
          return i;
        });
      } else {
        this._grPro = [...this._grPro, { count: value, color }];
      }
    }
  }

  @action.bound
  delete = (type: GRKind, color?: GrColor) => {
    if (type === "gr") {
      this._gr = INITIAL_GR;
    }

    if (type === "grPro" && color) {
      this._grPro = this._grPro.filter((i) => i.color !== color);
    }
  };
}
