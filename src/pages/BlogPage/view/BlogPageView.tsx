import { observer } from "mobx-react-lite";
import { ArticlesStatus } from "../../../Core/Articles";
import { Article } from "../../../Core/ApiClient";
import BlogShell from "../../../components/BlogShell/BlogShell";
import BlogItem from "./BlogItem";

type BlogPageViewProps = {
  status: ArticlesStatus;
  articles: Article[];
};
export default observer(function BlogPageView(props: BlogPageViewProps) {
  const { status, articles } = props;
  return (
    <BlogShell>
      {status === ArticlesStatus.Ready &&
        articles.map((a) => <BlogItem key={a.id} {...a} />)}
    </BlogShell>
  );
});
