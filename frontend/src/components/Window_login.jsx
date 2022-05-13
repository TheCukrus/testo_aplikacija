import React from "react";
import axios from "axios";

const Window_login = (props) =>
{
    const ref_user_name = React.createRef();
    const ref_password = React.createRef();


    const user_name = props.user_name;
    const set_user_name = props.set_user_name;


    const send_login_request = async () =>
    {
        try
        {
            const axios1 = await axios({
                "method": "post",
                "url": `/api/login`,
                "data":
                {
                    "user_name": ref_user_name.current.value,
                    "password": ref_password.current.value,
                }
            })
            alert("ok");
            props.send_request_get_user_name_and_update_state()
        }
        catch (err)
        {
            alert("error");
            console.log(err)
        }
    }
    return (
        <div className="window_login">
            <h1>Login</h1>
            <table>
                <tbody>
                    <tr>
                        <td>User name:</td>
                        <td><input type="text" ref={ref_user_name}></input><br /></td>
                    </tr>
                    <tr>
                        <td> Password:</td>
                        <td><input type="password" ref={ref_password}></input><br /></td>
                    </tr>
                    <tr>

                        <td><button onClick={send_login_request}>Login</button></td>

                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Window_login;