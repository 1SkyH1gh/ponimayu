import * as React from 'react'
import {FunctionComponent} from "react";
import styles from '../MainStyles.module.scss'
export interface PostProps {
postDescr:string
}

export const Post:FunctionComponent<PostProps>=(props)=>{
    return(
        <div className={styles.post}>
            <div className={styles.postTitle}>
                <p>Ilya Tormanov</p>
                <p className={styles.postDate}>18:36PM</p></div>
            <div className={styles.postBody}>{props.postDescr}</div>

            <div className={styles.actionPost}>
                <p>comment</p>
                <p>like</p>
            </div>
        </div>
    )
}