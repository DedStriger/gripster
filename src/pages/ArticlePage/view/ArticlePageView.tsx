import { observer } from "mobx-react-lite";
import BlogShell from "../../../components/BlogShell/BlogShell";
import { ArticlesStatus } from "../../../Core/Articles";
import { Article } from "../../../Core/ApiClient";
import styles from "./ArticlePageView.module.scss";
import "dayjs/locale/ru";
import dayjs from "dayjs";
import { useMemo } from "react";

type ArticlePageProps = { status: ArticlesStatus; item: Article };
export default observer(function ArticlePage(props: ArticlePageProps) {
  const { status, item } = props;
  const html = useMemo(
    () => (item.img ? `<img src="${item.img}" />${item.text}` : item.text),
    [item]
  );
  return (
    <BlogShell>
      {status === ArticlesStatus.Ready && (
        <div className={styles.container}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className={styles.footer}>
            <a
              href={item.from}
              rel="noreferrer"
              target="_blank"
              className={styles.footer__from}
            >
              Источник
            </a>
            <div className={styles.footer__date}>
              {dayjs(item.create).locale("ru").format("DD MMMM YYYY")}
            </div>
          </div>
        </div>
      )}
    </BlogShell>
  );
});
