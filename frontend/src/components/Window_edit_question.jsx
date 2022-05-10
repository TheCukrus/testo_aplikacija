import React from "react";
import axios from "axios";

const Window_edit_questions = (props) =>
{
    const ref_question_text = React.createRef();

    const ref_question_type_single_answer = React.createRef();
    const ref_question_type_multiple_answer = React.createRef();

    const ref_answer_1 = React.createRef();
    const ref_answer_1_correct = React.createRef();

    const ref_answer_2 = React.createRef();
    const ref_answer_2_correct = React.createRef();

    const change_handler = () =>
    {
        const copy_of_data = { ...props.data }

        copy_of_data.text = ref_question_text.current.value

        if (ref_question_type_single_answer.current.checked)
        {
            copy_of_data.type = "select_one"
        }
        else
        {
            copy_of_data.type = "select_multiple"
        }

        copy_of_data.answers[0].answer = ref_answer_1.current.value
        copy_of_data.answers[0].correct = ref_answer_1_correct.current.checked

        copy_of_data.answers[1].answer = ref_answer_2.current.value
        copy_of_data.answers[1].correct = ref_answer_2_correct.current.checked

        props.set_data(copy_of_data)
    }

    const send_delete_request = async () =>
    {
        try
        {
            const axios1 = await axios({
                "method": "delete",
                "url": `/api/questions/${props.data._id}`
            })
            window.confirm("ok");
            if (window.confirm === false)
            {
                return;
            }
            props.get_all_questions()
            close_window();
        }
        catch (err)
        {
            alert("error");
            console.log(err)
        }
    }

    const send_edit_request = async () =>
    {
        try
        {
            const axios1 = await axios({
                "method": "put",
                "url": `/api/questions/${props.data._id}`,
                "data":
                {
                    "text": props.data.text,
                    "type": props.data.type,
                    "answers": [
                        {
                            "answer": props.data.answers[0].answer,
                            "correct": props.data.answers[0].correct,
                        },
                        {
                            "answer": props.data.answers[1].answer,
                            "correct": props.data.answers[1].correct,
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
                value={props.data.text}
                onChange={change_handler}
            />

            <br />

            <p>klausimo tipas</p><br />

            <label>
                <input
                    type="radio"
                    name="question_type"
                    checked={props.data.type === "select_one"}
                    ref={ref_question_type_single_answer}
                    onChange={change_handler}
                />
                One answer
            </label>

            <br />

            <label>
                <input
                    type="radio"
                    name="question_type"
                    checked={props.data.type === "select_multiple"}
                    ref={ref_question_type_multiple_answer}
                    onChange={change_handler}
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
                        value={props.data.answers[0].answer}
                        type="text"
                        onChange={change_handler}
                    />
                </label>

                <label>
                    correct:
                    <input
                        ref={ref_answer_1_correct}
                        type="checkbox"
                        checked={props.data.answers[0].correct}
                        onChange={change_handler}
                    />
                </label><br />
            </div>

            <div>
                <label>
                    2:
                    <input
                        className="atsakymo_laukas"
                        ref={ref_answer_2}
                        value={props.data.answers[1].answer}
                        type="text"
                        onChange={change_handler}
                    />
                </label>

                <label>
                    correct:
                    <input
                        ref={ref_answer_2_correct}
                        type="checkbox"
                        checked={props.data.answers[1].correct}
                        onChange={change_handler}
                    />
                </label>

                <br />

            </div>
            <button onClick={close_window}>Close</button>
            <button onClick={send_edit_request}>Update</button>
            <button onClick={send_delete_request}>Delete</button>
        </div >
    )
}

export default Window_edit_questions;