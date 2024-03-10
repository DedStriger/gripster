import { observer } from "mobx-react-lite";
import { useCore } from "../../hooks/useCore";
import ArticlePageView from "./view/ArticlePageView";
import { useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import { MAIN_URL } from "../../utils/links";
import { Helmet } from "react-helmet";

export default observer(function ArticlePage() {
  const { articles } = useCore();
  const navigate = useNavigate();
  const { id } = useParams();
  const find = useMemo(
    () => id && articles.articles?.find((i) => i.id === +id),
    [articles.articles, id]
  );
  if (!find) {
    navigate(MAIN_URL);
    return null;
  }
  return (
    <>
      <Helmet>
        <meta name="description" content={find.title} />
      </Helmet>
      <ArticlePageView status={articles.status} item={find} />
    </>
  );
});
