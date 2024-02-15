import { ApiClient, Article } from "./ApiClient";
import { action, makeObservable, observable } from "mobx";

export enum ArticlesStatus {
  Idle,
  Load,
  Error,
  Ready,
}

export default class Articles {
  @observable private _articles: Article[] = [];
  @observable private _status = ArticlesStatus.Idle;
  constructor(
    protected readonly _root: {
      readonly apiClient: ApiClient;
    },
  ) {
    makeObservable(this);
  }

  get articles() {
    return this._articles;
  }

  get status() {
    return this._status;
  }

  @action.bound
  private _getArticles = async () => {
    this._status = ArticlesStatus.Load;
    try {
      const res = await this._root.apiClient.getArticles();
      this._articles = res.articles;
      this._status = ArticlesStatus.Ready;
    } catch (e) {
      console.error(e);
      this._status = ArticlesStatus.Error;
    }
  };

  async init() {
    await this._getArticles();
  }
}
