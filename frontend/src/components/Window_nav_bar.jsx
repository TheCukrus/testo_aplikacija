import axios from "axios";
import React from "react";

const Window_nav_bar = (props) =>
{

    const user_name = props.user_name;
    const set_user_name = props.set_user_name;

    const handle_add = () =>
    {
        props.set_data_Window_login(null)
        props.set_window_list_questions(null)
        props.set_data_Window_create_question(true)


    }

    const handle_login = () =>
    {
        props.set_window_list_questions(null)
        props.set_data_Window_create_question(null)
        props.set_data_Window_login(true)

    }

    const handle_list = () =>
    {
        props.set_data_Window_create_question(null)
        props.set_data_Window_login(null)
        props.set_window_list_questions(true)

    }


    const send_request_delete_token = async () =>
    {
        try
        {
            const result1 = await axios({
                "method": "delete",
                "url": "/api/login",
            })
            if (result1.data.token === null)
            {

                set_user_name(null)
            }
        }
        catch (err)
        {
            console.log(err)
        }
        props.send_request_get_user_name()
    }

    React.useEffect(() =>
    {
        props.send_request_get_user_name()
    }, [])

    return (
        <div className="window_nav_bar">


            <h1>Navigation_bar {user_name}</h1>

            {user_name !== null ? [<button key="1" onClick={handle_add}>Add</button>,
            <button key="2" onClick={send_request_delete_token}>logout</button>]
                : <button key="3" onClick={handle_login}>Login</button>}

            <button onClick={handle_list}>list</button>


        </div>
    )
}

export default Window_nav_bar;