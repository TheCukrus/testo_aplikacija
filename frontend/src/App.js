import './App.css';
import Window_edit_question from './components/Window_edit_question';
import React from 'react';
import axios from 'axios';
import Window_create_question from './components/Window_create_question.jsx';
import Window_list_questions from './components/Window_list_questions';
import Window_login from './components/Window_login';
import Window_nav_bar from './components/Window_nav_bar';


function App()
{
  const [user_name, set_user_name] = React.useState(null);


  const [questions, set_questions] = React.useState([])

  const [data_Window_edit_question, set_data_Window_edit_question] = React.useState(null);
  const [data_Window_create_question, set_data_Window_create_question] = React.useState(null);
  const [data_Window_login, set_data_Window_login] = React.useState(null);
  const [data_window_list_questions, set_window_list_questions] = React.useState(null);

  const get_all_questions = async () =>
  {
    try
    {
      const axios1 = await axios({
        "method": "get",
        "url": "/api/questions",
        "data": {}
      })

      set_questions(axios1.data);

      alert("ok")
    }
    catch (err)
    {
      alert("err")
    }
  }

  const send_request_get_user_name_and_update_state = async () =>
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
      set_user_name(null)
    }
  }


  return (
    <div className="App">



      <Window_nav_bar
        set_data_Window_login={set_data_Window_login}
        set_data_Window_create_question={set_data_Window_create_question}
        set_window_list_questions={set_window_list_questions}
        data_Window_login={data_Window_login}
        data_Window_create_question={data_Window_create_question}
        data_window_list_questions={data_window_list_questions}
        user_name={user_name}
        set_user_name={set_user_name}
        send_request_get_user_name={send_request_get_user_name_and_update_state}
      />

      {data_Window_login === null ? null : <Window_login
        data={data_Window_login}
        set_data={set_data_Window_login}
        user_name={user_name}
        set_user_name={set_user_name}
        send_request_get_user_name_and_update_state={send_request_get_user_name_and_update_state}
      />}


      {data_window_list_questions === null ? null : <Window_list_questions
        questions={questions}
        set_questions={set_questions}
        set_data_Window_edit_question={set_data_Window_edit_question}
        get_all_questions={get_all_questions}
      />}

      {data_Window_create_question === null ? null : <Window_create_question
        get_all_questions={get_all_questions}
        data={data_Window_create_question}
        set_data={set_data_Window_create_question}
      />}

      {data_Window_edit_question === null ? null : <Window_edit_question
        get_all_questions={get_all_questions}
        data={data_Window_edit_question}
        set_data={set_data_Window_edit_question}
      />}

    </div>
  );
}

export default App;
