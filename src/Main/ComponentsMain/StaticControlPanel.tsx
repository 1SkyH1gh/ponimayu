import * as React from 'react'
import {FunctionComponent} from "react";
import styles from '../MainStyles.module.scss'
export interface StaticControlPanelProps {

}

export const StaticControlPanel:FunctionComponent<StaticControlPanelProps>=()=>{
    return(
        <div className={styles.ControlPanel}>
            <p className={styles.action}>Account</p>
            <p className={styles.action}>message</p>
            <p className={styles.action}>publics</p>
            <p className={styles.action}>music</p>
            <p className={styles.action}>videos</p>
        </div>
    )
}