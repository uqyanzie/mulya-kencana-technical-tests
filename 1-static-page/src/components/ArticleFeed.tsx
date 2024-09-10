import styles from "@/styles/article.module.css";
import Article from "@/types/article";

interface IArticleFeedProps {
    article : Article
}

export function ArticleFeed( {article} : IArticleFeedProps) {

    return (
        <div className={styles.feed}>
            <h5 className={styles.titleText}>{article.title}</h5>
            <div className={styles.bodyText}>
                {article.body}
            </div>
        </div>
    )
}