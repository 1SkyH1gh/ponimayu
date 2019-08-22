import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './headerStyles.module.scss'
export interface LinksProps {

}

export const Links:FunctionComponent<LinksProps>=()=>{
    return(
        <div className={styles.links}>
            <p className={styles.link}>Link</p>
        </div>
    )
}