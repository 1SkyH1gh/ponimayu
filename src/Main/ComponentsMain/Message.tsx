import * as React from "react";
import {FunctionComponent} from "react";
import styles from '../MainStyles.module.scss'
export interface MessageProps{
    changeFormValue:(e:any)=>void,
    handleClick:()=>void

}

export const Message:FunctionComponent<MessageProps>=(props)=>{
    return(
        <div className={styles.message} >
            <form className={styles.formMess}>
                <input placeholder="new post"
                       className={styles.inputMess}
                       onChange={props.changeFormValue}/>
            </form>
            <div className={styles.sendMess}
                 onClick={props.handleClick}
            >Send</div>
        </div>
    )
}