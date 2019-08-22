import * as React from 'react'
import {FunctionComponent} from "react";
import styles from '../MainStyles.module.scss'
export interface SubscribeProps {

}

export const Subscribe:FunctionComponent<SubscribeProps>=()=>{
    return(
        <div className={styles.subscribe}>
            list Friends
        </div>
    )
}