import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './NewsStyles.module.scss'
export interface StreamProps {

}

export const Stream:FunctionComponent<StreamProps>=()=>{
    return(
        <div className={styles.stream}>Stream</div>
    )
}