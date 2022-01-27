import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {
    const dialogsElements = props.dialogsData.map( n => <DialogItem id={n.id} name={n.name} key={n.id} /> )
    const messageElements = props.dialogsMessage.map( m => <MessageItem message={m.message} key={m.id} /> )
    let element = React.createRef()



    let addPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let newText = e.target.value
        props.onPostChange(newText)
    }

    return (
        <div>
            <div className={s.main}>
                <div className={s.name}>
                    {dialogsElements}
                </div>
                <div className={s.message}>
                    {messageElements}
                </div>
            </div><hr/>

            <div>
                <textarea  ref={element} value={props.newPostText} onChange={onPostChange}/><br/>
                <button onClick={addPost}>add post</button>
            </div>
        </div>

    );};

export default Dialogs;