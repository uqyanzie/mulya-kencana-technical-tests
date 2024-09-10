import Link from "next/link";

import styles from "@/styles/users.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface IRouteButtonProps {
    readonly route: string;
}

export default function RouteButton({ route }: IRouteButtonProps) {
    return (
        <Link className={styles.routeButton} href={route}>
            See Detail <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
        </Link>
    );
}