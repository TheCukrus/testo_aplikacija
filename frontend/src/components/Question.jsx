import React from "react";
import axios from "axios";

const Question = (props) =>
{
   
    const edit_question = () =>
    {
        props.set_data_Window_edit_question(props.question)
    }

    return (
        <div className="question">

            <p>Klausimas: {props.question.text}</p>

            <button onClick={edit_question}>Redaguoti klausima</button>

        </div >
    )
}

export default Question