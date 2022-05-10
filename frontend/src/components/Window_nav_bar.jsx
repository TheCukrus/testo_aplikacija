import axios from "axios";
import React from "react";

const Window_nav_bar = (props) =>
{
    const [user_name, set_user_name] = React.useState();

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

    const send_request_get_user_name = async () =>
    {
        try
        {
            const axios1 = await axios({
                "method": "get",
                "url": "/api/login",
            })

            if (axios1.data.user_name !== undefined)
            {
                set_user_name(axios1.data.user_name);
            }
        }
        catch (err)
        {
            console.log(err);
        }

    }
    send_request_get_user_name();
    
    return (
        <div className="window_nav_bar">


            <h1>Navigation_bar {user_name}</h1>
            <button onClick={handle_add}>Add</button>
            <button onClick={handle_login}>Login</button>
            <button onClick={handle_list}>list</button>
        </div>
    )
}

export default Window_nav_bar;