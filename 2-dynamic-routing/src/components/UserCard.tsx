import styles from "@/styles/users.module.css"
import RouteButton from "./RouteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export function UserCard({ user }: { readonly user: User }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <h2>{user.name}</h2>
                <h3>@{user.username}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <a href={`https://${user.website}`} target="_blank">{user.website} <FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a>
            </div>
            <div className={styles.cardActions}>
                <RouteButton route={`/users/${user.id}`}/>
            </div>
        </div>
    );
}