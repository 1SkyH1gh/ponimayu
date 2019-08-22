import * as React from 'react'
import {FunctionComponent} from "react";
import styles from '../MainStyles.module.scss'
export interface RecommendedProps {

}

export const Recommended:FunctionComponent<RecommendedProps>=()=>{
    return(
        <div className={styles.recommended}>
            Recommended

        </div>
    )
}