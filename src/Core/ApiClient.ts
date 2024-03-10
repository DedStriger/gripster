export type Article = {
  id: number;
  create: string;
  title: string;
  preview?: string;
  text: string;
  from: string;
  img?: string;
};

export type GetArticlesResponse = {
  articles: Article[];
};

export interface ApiClient {
  getArticles: () => Promise<GetArticlesResponse>;
}
