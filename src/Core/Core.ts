import { Basket } from "./Basket";
import { HTTPTransport } from "./HTTP";
import ApiClient from "./ApiClientImpl";
import Articles from "./Articles";

export default class Core {
  initialized = false;
  readonly basket = new Basket();
  readonly http = new HTTPTransport();
  readonly apiClient = new ApiClient(this);
  readonly articles = new Articles(this);
  async init() {
    await this.articles.init();
    this.initialized = true;
  }
}
