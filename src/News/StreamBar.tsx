import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './NewsStyles.module.scss'
export interface StreamBarProps {

}

export const StreamBar:FunctionComponent<StreamBarProps>=()=>{
    return(
        <div className={styles.streamBar}>StreamBar</div>
    )
}