import Image from "next/image";
import styles from "@/styles/Home.module.css"
import React from "react";

interface ImageCardProps {
    src : string;
    alt : string;
}

export function ImageCard({ src, alt } : Readonly<ImageCardProps>) {

    return (
    <div className={styles.card}>
        <Image 
            className={styles.image} 
            // layout="responsive" 
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  
            width={260}height={260} src={`${src}`} 
            alt={alt} 
            blurDataURL="/nextjs.png"/>
    </div>
  );
}