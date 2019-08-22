import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './headerStyles.module.scss'
export interface MiniAvatarProps {

}
export const MiniAvatar:FunctionComponent<MiniAvatarProps>=()=>{
    return(
        <div className={styles.miniAvatar}>
            <img/>
        </div>
    )
}