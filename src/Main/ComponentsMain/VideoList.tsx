import * as React from 'react'
import {FunctionComponent} from "react";
import styles from '../MainStyles.module.scss'
export interface VideoListProps {

}

export const VideoList:FunctionComponent<VideoListProps>=()=>{
    return(
        <div className={styles.videoList}>
           <p>
               video
           </p>
            <p>
                video
            </p>
            <p>
                video
            </p>
        </div>
    )
}