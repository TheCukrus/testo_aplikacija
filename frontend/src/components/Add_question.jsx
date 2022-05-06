import React from "react";
import axios from "axios";
import "./Add_question.css";

const Add_question = () =>
{
    const ref_question_text = React.createRef();

    const ref_question_type_single_answer = React.createRef();
    const ref_question_type_multiple_answer = React.createRef();

    const ref_answer = React.createRef();
    const ref_correct = React.createRef();

    const handle_button_click = async () =>
    {


        const axios1 = await axios({
            "method": "post",
            "url": "/api/questions",
            "data":
            {
                "text": ref_question_text.current.value,
                "type": get_question_type(),
                "answers": [
                    {
                        "answer": ref_answer.current.value,
                        "correct": get_correct_value()
                    }]
            }
        })
    }

    const get_correct_value = () =>
    {
        console.log(ref_answer.current.value)

        if (ref_correct.current.value === "on")
        {
            return true
        }
        else
        {
            return false
        }
    }


    const get_question_type = () =>
    {
        if (ref_question_type_single_answer.current.checked)
        {
            return "select_one";
        }
        else if (ref_question_type_multiple_answer.current.checked)
        {
            return "select_multiple"
        }
        else
        {
            return undefined;
        }
    }


    return (
        <div className="add_question">

            <p>Klausimo tekstas</p><br />
            <textarea className="klausimo_tekstas" type="text" ref={ref_question_text}></textarea><br />

            <p>klausimo tipas</p><br />
            <label><input type="radio" name="question_type" ref={ref_question_type_single_answer}></input>One answer</label><br />
            <label><input type="radio" name="question_type" ref={ref_question_type_multiple_answer}></input>Multiple answers</label><br />

            <p>atsakymo variantai</p><br />

            <div>
                <label >answer 1: <input className="atsakymo_laukas" ref={ref_answer} type="text" ></input></label>
                <label> correct   <input ref={ref_correct} type="checkbox" ></input></label><br />
            </div>

            <button onClick={handle_button_click}>talpinti klausima</button>


        </div >
    )
}

export default Add_question;