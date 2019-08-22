import * as React from 'react'
import {FunctionComponent} from "react";
import {Links} from "./Links";
import {MiniAvatar} from "./MiniAvatar";
import styles from './headerStyles.module.scss'
export interface HeaderProps{

}

export const Header:FunctionComponent<HeaderProps>=()=>{
    return(
        <div className={styles.HeaderContainer}>
            <Links/>
            <MiniAvatar/>
        </div>
    )
}