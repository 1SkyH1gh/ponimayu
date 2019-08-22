import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './NewsStyles.module.scss'
export interface NewsProps {

}

export const News:FunctionComponent<NewsProps>=()=>{
    return(
        <div className={styles.news}>News</div>
    )
}