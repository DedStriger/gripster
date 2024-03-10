import { observer } from "mobx-react-lite";
import { Article } from "../../../Core/ApiClient";
import styles from "./BlogPageView.module.scss";
import { useNavigate } from "react-router-dom";
import { useCallback, useMemo } from "react";
import { BLOG_URL } from "../../../utils/links";
import "dayjs/locale/ru";
import dayjs from "dayjs";

export type BlogItemProps = Article;
export default observer(function BlogItem(props: BlogItemProps) {
  const { id, title, img, create } = props;
  const navigate = useNavigate();
  const goToArticle = useCallback(() => {
    navigate({ pathname: `${BLOG_URL}/${id}` });
  }, [navigate, id]);
  const html = useMemo(
    () => (img ? `<img src="${img}" />${title}` : title),
    [title, img]
  );
  return (
    <div className={styles.container} onClick={goToArticle}>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className={styles.footer}>
        <div className={styles.more}>Подробнее</div>
        <div className={styles.date}>
          {dayjs(create).locale("ru").format("DD MMMM YYYY")}
        </div>
      </div>
    </div>
  );
});
