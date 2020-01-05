import React, { useState } from 'react';
import Progress from './Progress';
import Question from './Question';
import Answers from './Answers';
import { withRouter } from 'react-router';
// Material-UI
import { makeStyles } from '@material-ui/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import ChatIcon from '@material-ui/icons/Chat';

import '../App.css';

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
});

function Home(props) {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState('');
  const [showResults, setShowResults] = useState();
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
    
  const changeRoutePath = (e, link) => {
      e.preventDefault();
      props.history.push(link);
  };

  const questions = [

  {
    id: 1,
    question:'Proteinの意味は?',
    answer_a: 'タンパク質',
    answer_b: '筋肉',
    answer_c: '増強剤',
    answer_d: '合成',
    correct_answer: 'a',
  },
  {
    id: 2,
    question:'上半身の筋肉で最も大きい部位は?',
    answer_a: '肩',
    answer_b: 'お腹',
    answer_c: '腕',
    answer_d: '胸',
    correct_answer: 'a',
  },
  {
    id: 3,
    question:'筋肉のゴールデンタイムとはいつ?',
    answer_a: '筋トレ後',
    answer_b: '夕飯前',
    answer_c: '就寝前',
    answer_d: '起床後',
    correct_answer: 'a',
  }
];

const question = questions[currentQuestion];

const handleClick = e => {
    setCurrentAnswer(e.target.value);
}
 
const renderError = () => {
  if(!error){
    return;
  }

  return <div className = "error">{error}</div>;
}

const renderResultMark = (question, answer) => {
  if(question.correct_answer === answer.answer){
    return <span className = "correct">正解〇</span>;
  }

  return <span className = "failed">不正解×</span> ;
};

const renderResultsData = () => {
    return answers.map( answer => {
      const question = questions.find(
        question => question.id === answer.questionId
      );

    return (
    <div key = {question.id}>
      {question.question} - {renderResultMark(question, answer)}
    </div>
    );

    });
};

const restart = () => {

  setAnswers([]);
  setCurrentAnswer('');
  setCurrentQuestion(0);
  setShowResults(false);

};

const next = () => {
  const answer = {questionId: question.id, answer: currentAnswer};

  if(!currentAnswer){
    setError('答えを選択してください');
    return;
  }

  answers.push(answer);
  setAnswers(answers);
  setCurrentAnswer('');

  if(currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
  }

  setShowResults(true);
};

if(showResults){
  return (
    <div className = "container results">
        <h2>Results</h2>
        <ul>{renderResultsData()}</ul>
        <button className = "btn btn-primary" onClick = {restart}>
        もう一度挑戦
        </button>
      
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
              <BottomNavigationAction
                  label="Quiz"
                  icon={<ContactSupportOutlinedIcon />}
                  onClick={(e) => changeRoutePath(e, '/')}/>
              <BottomNavigationAction
                  label="Chat"
                  icon={<ChatIcon />}
                  onClick={(e) => changeRoutePath(e, '/chat')}/>
        </BottomNavigation>
    </div>
  );
}else{
  return (
    <div className="container">
      <Progress total = {questions.length} current = {currentQuestion + 1} />
      
      <Question question = {question.question} />
      
      {renderError()}

      <Answers 
        question = {question} 
        currentAnswer = {currentAnswer} 
        handleClick = {handleClick}
      />

      <button className = "btn btn-primary" onClick = {next}>
        次へ
      </button>

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
        >
        <BottomNavigationAction
            label="Quiz"
            icon={<ContactSupportOutlinedIcon />}
            onClick={(e) => changeRoutePath(e, '/')}/>
        <BottomNavigationAction
            label="Chat"
            icon={<ChatIcon />}
            onClick={(e) => changeRoutePath(e, '/chat')}/>
      </BottomNavigation>
    </div>
  ); 
  }
}

export default withRouter(Home);
