"use client"

import styles from "./page.module.css";

import loader from "@/styles/loader.module.css";

import { ArticleFeed } from "@/components/ArticleFeed";
import getArticles from "@/services/getArticles";
import { useQuery } from "@tanstack/react-query";

export default function Home() {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
  })

  if (isLoading) {
    return <div className={loader.boxCircle}></div>
  }

  if (isError || data?.length === 0) {
    return <div className={loader.error}>Error Fetching Data!</div>
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Articles</h1>
      </div>
      <div className={styles.articleContainer}>
        {data?.map((article) => (
          <ArticleFeed key={article.id} article={article} />
        ))}
        
      </div>
    </div>
  );
}
