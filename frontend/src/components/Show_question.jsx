import React from "react";
import axios from "axios";


const Show_question = () =>
{
    const [question, set_question] = React.useState([])

    const get_all_questions = async () =>
    {
        const result1 = await axios({
            "method": "get",
            "url": "/api/questions",
        })
        console.log(question)
        set_question(result1.body);
    }
    return (
        <div>
            <h1>klausimai</h1>
            <p>{JSON.stringify(question)}</p>
            <button onClick={get_all_questions}>visi klausimai</button>
        </div>
    )
}


export default Show_question;