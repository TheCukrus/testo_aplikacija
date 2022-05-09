import React from "react";
import axios from "axios";

const Question_edit = (props) =>
{
    console.log(props.question_edit_data);
    const ref_question_text_edit = React.createRef();

    const ref_question_type_single_answer_edit = React.createRef();
    const ref_question_type_multiple_answer_edit = React.createRef();

    const ref_answer_1_edit = React.createRef();
    const ref_answer_1_correct_edit = React.createRef();

    const ref_answer_2_edit = React.createRef();
    const ref_answer_2_correct_edit = React.createRef();


    const [klausimo_laukas, set_klausimo_laukas] = React.useState(props.question_edit_data.text)


    const get_question_type = () =>
    {
        if (ref_question_type_single_answer_edit.current.checked)
        {
            return "select_one";
        }
        else if (ref_question_type_multiple_answer_edit.current.checked)
        {
            return "select_multiple"
        }
        else
        {
            return undefined;
        }
    }

    const handle_button_click = async () =>
    {
        try
        {
            const axios1 = await axios({
                "method": "put",
                "url": `/api/questions/${props.questions._id}`,
                "data":
                {
                    "text": ref_question_text_edit.current.value,
                    "type": get_question_type(),
                    "answers": [
                        {
                            "answer": ref_answer_1_edit.current.value,
                            "correct": ref_answer_1_correct_edit.current.checked
                        },
                        {
                            "answer": ref_answer_2_edit.current.value,
                            "correct": ref_answer_2_correct_edit.current.checked
                        }
                    ]
                }
            })
        }
        catch (err)
        {
            console.log(err);
        }


    }


    const close_window = () =>
    {
        return props.set_question_edit_data(null)
    }

    return (
        <div className="add_question">

            <p>Klausimo tekstas</p><br />
            <textarea className="klausimo_tekstas" value={set_klausimo_laukas} type="text" ref={ref_question_text_edit}></textarea><br />

            <p>klausimo tipas</p><br />
            <label><input type="radio" name="question_type" ref={ref_question_type_single_answer_edit}></input>One answer</label><br />
            <label><input type="radio" name="question_type" ref={ref_question_type_multiple_answer_edit}></input>Multiple answers</label><br />

            <p>atsakymo variantai</p><br />

            <div>
                <label>1:<input className="atsakymo_laukas" ref={ref_answer_1_edit} type="text" ></input></label>
                <label>correct:<input ref={ref_answer_1_correct_edit} type="checkbox" ></input></label><br />
            </div>

            <div>
                <label>2:<input className="atsakymo_laukas" ref={ref_answer_2_edit} type="text" ></input></label>
                <label>correct:<input ref={ref_answer_2_correct_edit} type="checkbox" ></input></label><br />
            </div>

            <button onClick={handle_button_click}>Redaduoti klausima</button>
            <button onClick={close_window}>Uzdaryti langa</button>


        </div >
    )
}

export default Question_edit;