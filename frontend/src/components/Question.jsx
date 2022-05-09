import React from "react";
import axios from "axios";

const Question = (props) =>
{
    const remove_question = async () =>
    {
        if (window.confirm(`Trinti ${props.question.text}?`) === false) return

        try
        {
            const axios1 = await axios(
                {
                    "method": "delete",
                    "url": `/api/questions/${props.question._id}`
                })

            alert("ok")
        }
        catch (err)
        {
            alert("error")
        }
    }

    const edit_question = () =>
    {
        props.set_data_Window_edit_question(props.question)
    }

    return (
        <div className="question">

            <p>Klausimas: {props.question.text}</p>

            <p>Galimi variantai: {props.question.answers[0].answer}</p>

            <button onClick={remove_question}>Trinti klausima</button>

            <button onClick={edit_question}>Redaguoti klausima</button>

        </div >
    )
}

export default Question