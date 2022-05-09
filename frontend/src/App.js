import './App.css';
import Add_question from './components/Add_question.jsx';
import Question_edit from './components/Question_edit';
import Show_questions from './components/Show_questions';
import React from 'react';

function App()
{
  const [questions, set_questions] = React.useState([])



  const [question_edit_data, set_question_edit_data] = React.useState(null);

  if (question_edit_data === null)
  {
    return (
      <div className="App">
        <Add_question />
        <Show_questions set_question_edit_data={set_question_edit_data} questions={questions} set_questions={set_questions} />
      </div>
    );
  }
  else
  {
    return (
      <div className="App">
        <Add_question />
        <Show_questions questions={questions} set_questions={set_questions} set_question_edit_data={set_question_edit_data} />
        <Question_edit questions={questions} set_question_edit_data={set_question_edit_data} question_edit_data={question_edit_data} />
      </div>
    );
  }


}

export default App;
