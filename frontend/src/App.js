import './App.css';
import Add_question from './components/Add_question.jsx';
import Window_edit_question from './components/Window_edit_question';
import Show_questions from './components/Show_questions';
import React from 'react';

function App()
{
  const [questions, set_questions] = React.useState([])


  const [data_Window_edit_question, set_data_Window_edit_question] = React.useState(null);

  return (
    <div className="App">

      <Add_question />

      <Show_questions questions={questions} set_questions={set_questions} set_data_Window_edit_question={set_data_Window_edit_question} />

      {data_Window_edit_question === null ? null : <Window_edit_question data_Window_edit_question={data_Window_edit_question} set_data_Window_edit_question={set_data_Window_edit_question} />}

    </div>
  );
}

export default App;
