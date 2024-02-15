import { HTTPTransport } from "./HTTP";
import { ApiClient, GetArticlesResponse } from "./ApiClient";

export default class ApiClientImpl implements ApiClient {
  constructor(
    protected readonly _root: {
      readonly http: HTTPTransport;
    },
  ) {}

  getArticles = () => {
    return this._root.http.get<GetArticlesResponse>({
      url: "https://gripster-pro.ru/tut/articles.json",
    });
  };
}
