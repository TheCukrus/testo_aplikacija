import React from "react";
import axios from "axios";

const Show_question = () =>
{
    const [questions, set_questions] = React.useState([])

    const get_all_questions = async () =>
    {
        try
        {
            const axios1 = await axios({
                "method": "get",
                "url": "/api/questions",
                "data": {}
            })

            console.log(axios1)
            set_questions(axios1.data);
        }
        catch (err)
        {

        }
    }

    return (
        <div>
            <h1>get_all_questions</h1>

            <p>{JSON.stringify(questions)}</p>

            <button onClick={get_all_questions}>get_all_questions</button>
        </div>
    )
}

export default Show_question