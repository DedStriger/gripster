import { Basket } from "./Basket";

export default class Core {
  initialized = false;
  readonly basket = new Basket();
  init() {
    this.initialized = true;
  }
}
