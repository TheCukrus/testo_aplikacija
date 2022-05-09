import React from "react";
import axios from "axios";
import Question from "./Question.jsx";

const Show_question = (props) =>
{
    const get_all_questions = async () =>
    {
        try
        {
            const axios1 = await axios({
                "method": "get",
                "url": "/api/questions",
                "data": {}
            })

            // console.log("cia axios", axios1)
            props.set_questions(axios1.data);
        }
        catch (err)
        {

        }
    }

    console.log("cia questions", props.questions)
    return (
        <div>
            <h1>get_all_questions</h1>

            {props.questions.map((ele, i) => { return <Question set_question_edit_data={props.set_question_edit_data} key={i} question={ele} get_all_questions={get_all_questions} /> })}

            <button onClick={get_all_questions}>get_all_questions</button>
        </div>
    )
}

export default Show_question