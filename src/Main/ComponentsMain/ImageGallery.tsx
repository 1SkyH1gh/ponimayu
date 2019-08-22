import * as React from 'react'
import {FunctionComponent} from "react";
import styles from '../MainStyles.module.scss'
export interface ImageGalleryProps {

}

export const ImageGallery:FunctionComponent<ImageGalleryProps>=()=>{
    return(
        <div className={styles.imageGal}>
            <img/>
            <img/>
            <img/>
        </div>
    )
}
