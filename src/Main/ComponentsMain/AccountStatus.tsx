import * as React from 'react'
import {FunctionComponent} from "react";
import styles from '../MainStyles.module.scss'
export interface AccountStatusProps {

}

export const AccountStatus:FunctionComponent<AccountStatusProps>=()=>{
    return(
        <div className={styles.status}>
            <h5 className={styles.nickname}>IlyaTormanov</h5>
            <h3 className={styles.profess}>web-designer</h3>
            <p className={styles.status}>Status</p>
        </div>
    )
}