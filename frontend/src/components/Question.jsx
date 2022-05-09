import React from "react";
import axios from "axios";
import Question_edit from "./Question_edit";

const Question = (props) =>
{
    const remove_question = async () =>
    {
        const confirm_box = window.confirm(`Trinti ${props.question.text}?`)
        if (confirm_box === false) return

        try
        {
            const axios1 = await axios({
                "method": "delete",
                "url": `/api/questions/${props.question._id}`
            })
            props.get_all_questions()
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const update_question = () =>
    {
        props.set_question_edit_data(props.question)
    }




    return (
        <div className="question">
            <p>Klausimas: {props.question.text}</p>
            <p> Galimi variantai: {props.question.answers[0].answer}</p>
            <button onClick={remove_question}>Trinti klausima</button>
            {/* <button onClick={update_question}>Redaguoti klausima</button> */}
            <button onClick={update_question}>Redaguoti klausima</button>


        </div >
    )
}

export default Question;