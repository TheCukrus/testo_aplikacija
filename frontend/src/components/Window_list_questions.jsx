import React from "react";
import Question from "./Question.jsx";

const Window_list_questions = (props) =>
{

    return (
        <div className="window_list_question">

            <h1>get_all_questions</h1>

            {
                props.questions.map((ele, i) =>
                {
                    return <Question
                        key={i}
                        question={ele}
                        data_Window_edit_question={props.data_Window_edit_question}
                        set_data_Window_edit_question={props.set_data_Window_edit_question}
                        get_all_questions={props.get_all_questions}
                        remove_question={props.remove_question} />
                })
            }

            <button onClick={props.get_all_questions}>get_all_questions</button>

        </div >
    )
}

export default Window_list_questions