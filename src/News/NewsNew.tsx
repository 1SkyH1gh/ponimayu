import * as React from 'react'
import {FunctionComponent} from "react";
import {Stream} from "./Stream";
import {StreamBar} from "./StreamBar";
import styles from './NewsStyles.module.scss'
import {News} from "./News";
export interface NewsNewProps {

}

export const NewsNew:FunctionComponent<NewsNewProps>=()=>{
    return(
        <div className={styles.newsNewCont}>
            <Stream/>
            <News/>
            <StreamBar/>
        </div>
    )
}