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

            props.set_questions(axios1.data);

            alert("ok")
        }
        catch (err)
        {
            alert("err")
        }
    }

    return (
        <div>

            <h1>get_all_questions</h1>

            {
                props.questions.map((ele, i) =>
                {
                    return <Question
                        key={i}
                        question={ele}
                        data_Window_edit_question={props.data_Window_edit_question}
                        set_data_Window_edit_question={props.set_data_Window_edit_question} />
                })
            }

            <button onClick={get_all_questions}>get_all_questions</button>

        </div >
    )
}

export default Show_question