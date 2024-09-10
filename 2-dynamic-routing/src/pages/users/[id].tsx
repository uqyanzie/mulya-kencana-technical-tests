'use client'

import styles from "@/styles/Home.module.css";
import { getUserById } from "@/services/userServices";
import { GetServerSideProps } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare, faGlobe, faBuilding, faHome, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export const getServerSideProps : GetServerSideProps<{
    readonly user: User;
}> = async (context) => {
    const id = parseInt(context?.params?.id as string) || 1;
    const user = await getUserById(id);
    return { props: { user } };
}

export default function Page({ user } : { readonly user: User }) {
    return (
        <div className={styles.page}>
             <div className={styles.box}>
                <div className={styles.boxHeader}>
                    <h1>{user.name}</h1>
                    <h2>@{user.username}</h2>
                </div>
                <div className={styles.boxContent}>
                    <div className={styles.boxSection}>
                        <p>Email <FontAwesomeIcon icon={faEnvelope} /> : {user.email}</p>
                        <p>Phone <FontAwesomeIcon icon={faPhoneSquare}/> : {user.phone}</p>
                        <p>Website <FontAwesomeIcon icon={faGlobe}/> : <a href={`https://${user.website}`} target="_blank">{user.website}</a></p>
                        <h2 style={{marginTop: "3rem", marginBottom: 12}}>Company <FontAwesomeIcon icon={faBuilding} /> :</h2>
                        <p>Name: {user.company.name}</p>
                        <p>Catch Phrase : {user.company.catchPhrase}</p>
                        <p>Business Sector {user.company.bs}</p>
                    </div>
                    <div className={styles.boxSection}>
                        <h2 style={{marginBottom: 12}}>Address <FontAwesomeIcon icon={faHome} /> :</h2>
                        <p>City : {user.address.city}</p>
                        <p>Street : {user.address.street}</p>
                        <p>Suite : {user.address.suite}</p>
                        <p>Zip Code : {user.address.zipcode}</p>
                        <h3 style={{marginBottom: 12}}>Geo <FontAwesomeIcon icon={faMapLocationDot} /> : </h3>
                        <p>Latitude : {user.address.geo.lat}</p>
                        <p>Longitude : {user.address.geo.lng}</p>
                    </div>
                </div>
               
            </div>
        </div>
       
    );
}