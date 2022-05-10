import React from "react";
import axios from "axios";

const Window_create_question = (props) =>
{
    const ref_question_text = React.createRef();

    const ref_question_type_single_answer = React.createRef();
    const ref_question_type_multiple_answer = React.createRef();

    const ref_answer_1 = React.createRef();
    const ref_answer_1_correct = React.createRef();

    const ref_answer_2 = React.createRef();
    const ref_answer_2_correct = React.createRef();

    const send_request = async () =>
    {
        try
        {
            const axios1 = await axios({
                "method": "post",
                "url": "/api/questions",
                "data":
                {
                    "text": ref_question_text.current.value,
                    "type": question_type(),
                    "answers": [
                        {
                            "answer": ref_answer_1.current.value,
                            "correct": ref_answer_1_correct.current.checked,
                        },
                        {
                            "answer": ref_answer_2.current.value,
                            "correct": ref_answer_2_correct.current.checked,
                        }
                    ]
                }
            })
            alert("ok");
            props.get_all_questions()
        }
        catch (err)
        {
            alert("error");
            console.log(err)
        }
    }

    const question_type = () =>
    {
        if (ref_question_type_single_answer.current.checked === true)
        {
            return "select_one";
        }
        else if (ref_question_type_multiple_answer.current.checked === true)
        {
            return "select_multiple";
        }
    }

    const close_window = () =>
    {
        return props.set_data(null);
    }

    return (
        <div className="window_create_question">

            <p>Klausimo tekstas</p><br />

            <textarea
                className="klausimo_tekstas"
                ref={ref_question_text}
            />

            <br />

            <p>klausimo tipas</p><br />

            <label>
                <input
                    type="radio"
                    name="question_type"
                    ref={ref_question_type_single_answer}
                />
                One answer
            </label>

            <br />

            <label>
                <input
                    type="radio"
                    name="question_type"
                    ref={ref_question_type_multiple_answer}
                />
                Multiple answers
            </label>

            <br />

            <p>atsakymo variantai</p><br />

            <div>
                <label>
                    1:
                    <input
                        className="atsakymo_laukas"
                        ref={ref_answer_1}
                        type="text"
                    />
                </label>

                <label>
                    correct:
                    <input
                        ref={ref_answer_1_correct}
                        type="checkbox"
                    />
                </label><br />
            </div>

            <div>
                <label>
                    2:
                    <input
                        className="atsakymo_laukas"
                        ref={ref_answer_2}
                        type="text"
                    />
                </label>

                <label>
                    correct:
                    <input
                        ref={ref_answer_2_correct}
                        type="checkbox"
                    />
                </label>

                <br />

            </div>
            <button onClick={close_window}>Close</button>
            <button onClick={send_request}>Create</button>
        </div >
    )
}

export default Window_create_question;