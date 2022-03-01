import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Redirect} from "react-router-dom";
import {reduxForm} from "redux-form";
import {AddMessageForm} from "./AddMessageForm";



const Dialogs = (props) => {
    const dialogsElements = props.dialogsData.map( n => <DialogItem id={n.id} name={n.name} key={n.id} /> )
    const messageElements = props.dialogsMessage.map( m => <MessageItem message={m.message} key={m.id} /> )
    //let element = React.createRef()

    let addNewMessage = (values) => {
        props.addPost(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

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
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>

    );};


const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;