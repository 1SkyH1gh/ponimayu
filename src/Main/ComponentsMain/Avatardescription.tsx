import * as React from 'react'
import {FunctionComponent} from "react";
import styles from '../MainStyles.module.scss'
export interface AvatardescriptionProps {

}

export const Avatardescription:FunctionComponent<AvatardescriptionProps>=()=>{
    return(
        <div className={styles.avatarDescription}>
            <p className={styles.actionDescr}>change photo</p>
            <p className={styles.actionDescr}>redaction</p>
        </div>
    )
}