import { observer } from "mobx-react-lite";
import { Article } from "../../../Core/ApiClient";
import styles from "./BlogPageView.module.scss";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { BLOG_URL } from "../../../utils/links";
import "dayjs/locale/ru";
import dayjs from "dayjs";

export type BlogItemProps = Article;
export default observer(function BlogItem(props: BlogItemProps) {
  const { id, title, create } = props;
  const navigate = useNavigate();
  const goToArticle = useCallback(() => {
    navigate({ pathname: `${BLOG_URL}/${id}` });
  }, [navigate, id]);
  return (
    <div className={styles.container} onClick={goToArticle}>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: title }}
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
