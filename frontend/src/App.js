import './App.css';
import Add_question from './components/Add_question.jsx';
import Question_edit from './components/Window_edit_question';
import Show_questions from './components/Show_questions';
import React from 'react';

function App()
{
  const [questions, set_questions] = React.useState([])


  const [window_update_data, set_window_update_data] = React.useState(null);

  if (window_update_data === null)
  {
    return (
      <div className="App">
        <Add_question />
        <Show_questions set_window_update_data={set_window_update_data} questions={questions} set_questions={set_questions} />
      </div>
    );
  }
  else
  {
    return (
      <div className="App">
        <Add_question />
        <Show_questions questions={questions} set_questions={set_questions} set_window_update_data={set_window_update_data} />
        <Question_edit questions={questions} set_window_update_data={set_window_update_data} window_update_data={window_update_data} />

      </div>
    );
  }


}

export default App;
