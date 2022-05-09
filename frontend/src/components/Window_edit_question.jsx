import React from "react";
import axios from "axios";

const Window_edit_question = (props) =>
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
        const copy_of_data_Window_edit_question = { ...props.data_Window_edit_question }

        copy_of_data_Window_edit_question.text = ref_question_text.current.value

        if (ref_question_type_single_answer.current.checked)
        {
            copy_of_data_Window_edit_question.type = "select_one"
        }
        else
        {
            copy_of_data_Window_edit_question.type = "select_multiple"
        }

        copy_of_data_Window_edit_question.answers[0].answer = ref_answer_1.current.value
        copy_of_data_Window_edit_question.answers[0].correct = ref_answer_1_correct.current.checked

        copy_of_data_Window_edit_question.answers[1].answer = ref_answer_2.current.value
        copy_of_data_Window_edit_question.answers[1].correct = ref_answer_2_correct.current.checked

        props.set_data_Window_edit_question(copy_of_data_Window_edit_question)
    }

    const send_edit_reqest = () =>
    {

    }

    return (
        <div className="add_question">

            <p>Klausimo tekstas</p><br />

            <textarea
                className="klausimo_tekstas"
                ref={ref_question_text}
                value={props.data_Window_edit_question.text}
                onChange={change_handler}
            />

            <br />

            <p>klausimo tipas</p><br />

            <label>
                <input
                    type="radio"
                    name="question_type"
                    ref={ref_question_type_single_answer}
                    checked={props.data_Window_edit_question.type === "select_one"}
                    onChange={change_handler}
                />
                One answer
            </label>

            <br />

            <label>
                <input
                    type="radio"
                    name="question_type"
                    ref={ref_question_type_multiple_answer}
                    checked={props.data_Window_edit_question.type === "select_multiple"}
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
                        type="text"
                        value={props.data_Window_edit_question.answers[0].answer}
                        onChange={change_handler}
                    />
                </label>

                <label>
                    correct:
                    <input
                        ref={ref_answer_1_correct}
                        type="checkbox"
                        checked={props.data_Window_edit_question.answers[0].correct}
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
                        type="text"
                        value={props.data_Window_edit_question.answers[1].answer}
                        onChange={change_handler}
                    />
                </label>

                <label>
                    correct:
                    <input
                        ref={ref_answer_2_correct}
                        type="checkbox"
                        checked={props.data_Window_edit_question.answers[1].correct}
                        onChange={change_handler}
                    />
                </label>

                <br />

            </div>

        </div >
    )
}

export default Window_edit_question;