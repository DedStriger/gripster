import { observer } from "mobx-react-lite";
import BlogPageView from "./view/BlogPageView";
import { useCore } from "../../hooks/useCore";

export default observer(function BlogPage() {
  const { articles } = useCore();

  return <BlogPageView articles={articles.articles} status={articles.status} />;
});
