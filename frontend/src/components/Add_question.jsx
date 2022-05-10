import React from "react";
import axios from "axios";

const Add_question = (props) =>
{
    const ref_question_text = React.createRef();

    const ref_answer_1 = React.createRef();
    const ref_answer_1_correct = React.createRef();

    const ref_answer_2 = React.createRef();
    const ref_answer_2_correct = React.createRef();

    const handle_button_click = async () =>
    {
        try
        {
            const axios1 = await axios({
                "method": "post",
                "url": "/api/questions",
                "data":
                {
                    "text": ref_question_text.current.value,
                    "type": props.get_question_type(),
                    "answers": [
                        {
                            "answer": ref_answer_1.current.value,
                            "correct": ref_answer_1_correct.current.checked
                        },
                        {
                            "answer": ref_answer_2.current.value,
                            "correct": ref_answer_2_correct.current.checked
                        }
                    ]
                }
            })
            props.get_all_questions()
        }
        catch (err)
        {
            console.log(err)
        }

    }




    return (
        <div className="add_question">

            <p>Klausimo tekstas</p><br />
            <textarea className="klausimo_tekstas" type="text" ref={ref_question_text}></textarea><br />

            <p>klausimo tipas</p><br />
            <label><input type="radio" name="question_type" ref={props.ref_question_type_single_answer}></input>One answer</label><br />
            <label><input type="radio" name="question_type" ref={props.ref_question_type_multiple_answer}></input>Multiple answers</label><br />

            <p>atsakymo variantai</p><br />

            <div>
                <label>1:<input className="atsakymo_laukas" ref={ref_answer_1} type="text" ></input></label>
                <label>correct:<input ref={ref_answer_1_correct} type="checkbox" ></input></label><br />
            </div>

            <div>
                <label>2:<input className="atsakymo_laukas" ref={ref_answer_2} type="text" ></input></label>
                <label>correct:<input ref={ref_answer_2_correct} type="checkbox" ></input></label><br />
            </div>

            <button onClick={handle_button_click}>talpinti klausima</button>


        </div >
    )
}

export default Add_question