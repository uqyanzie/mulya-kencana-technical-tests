"use client"

import styles from "@/styles/Home.module.css";
import userStyle from "@/styles/users.module.css";
import { useQuery } from "@tanstack/react-query";
import loader from "@/styles/loader.module.css";
import { getAllUsers } from "@/services/userServices";
import { UserCard } from "@/components/UserCard";

export default function Page() {

    const {data, isLoading, isError} = useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers
    })

    if (isLoading) {
        return <div className={loader.boxCircle}></div>
    }
    
    if (isError || data?.length === 0) {
        return <div className={loader.error}>Error Fetching Data!</div>
    }

    return (
        <div className={styles.page}>
            <h1 style={{textAlign:'center', fontSize: "3rem"}}>Users</h1>
            <div className={userStyle.dataList}>
                {data?.map((user) => (
                   <UserCard key={user.id} user={user}/>
                ))}
            </div>
        </div>
    );
}