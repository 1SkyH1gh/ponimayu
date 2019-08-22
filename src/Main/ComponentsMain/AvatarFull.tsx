import * as React from "react";
import {FunctionComponent} from "react";
import styles from '../../AvatarSt.module.scss'
import avatar from '../../windowAva.jpg'
export interface AvatarFullProps {

}

export const AvatarFull:FunctionComponent<AvatarFullProps>=()=>{
    return(
        <div className={styles.avatarBlock}>
            <img src={avatar} className={styles.avatar}/>

        </div>


    )
}