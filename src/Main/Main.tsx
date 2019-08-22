import * as React from 'react'
import {FunctionComponent, useState} from "react";
import {StaticControlPanel} from "./ComponentsMain/StaticControlPanel";
import {ImageGallery} from "./ComponentsMain/ImageGallery";
import {AvatarFull} from "./ComponentsMain/AvatarFull";
import {Avatardescription} from "./ComponentsMain/Avatardescription";
import {AccountStatus} from "./ComponentsMain/AccountStatus";
import {Subscribe} from "./ComponentsMain/Subscribe";
import {Message} from "./ComponentsMain/Message";
import {Recommended} from "./ComponentsMain/Recommended";
import {VideoList} from "./ComponentsMain/VideoList";
import {Post} from "./ComponentsMain/Post";
import styles from './MainStyles.module.scss'

export interface MainProps {

}

export const Main:FunctionComponent<MainProps>=()=>{
    const [formValue,setFormValue]=useState('')
        const [copyFormValue,setCopyFormValue]=useState('')
    const changeFormValue=(e: any)=>{
        setFormValue(e.target.value)
        setCopyFormValue(formValue)
    }
    const handleFormClick=()=>{

       setFormValue('')
    }
    return(


    <div className={styles.main}>
     <div className={styles.leftMain}>
        <StaticControlPanel/>

     </div>
     <div className={styles.midMain}>
        <Message changeFormValue={changeFormValue}
                    handleClick={handleFormClick}
        />
        <Post postDescr={copyFormValue}/>
    </div>
     <div className={styles.rightMain}>

        <ImageGallery/>
    </div>

  </div>
    )
}