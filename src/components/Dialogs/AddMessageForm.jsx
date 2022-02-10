import {Field} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <Field
                    component={Textarea}
                    name={"newMessageBody"}
                    placeholder={"MessageNew"}
                    validate={[required, maxLength50 ]}
                /><br/>
            <button>add post</button>
        </form>
    )
}