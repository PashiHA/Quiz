import './index.css';
import React from 'react';

const questions = [
  {
    title: 'Столица Бразилии?',
    variants: ['Бразилиа', 'Конаклы', 'Зелена Гура'],
    correct: 0,
  },
  {
    title: 'Столица Молдовы?',
    variants: ['Бельцы', 'Кишинев', 'Унгены'],
    correct: 1,
  },
  {
    title: 'Столица Франции?',
    variants: [
      'Токио',
      'Милан',
      'Париж',
    ],
    correct: 2,
  },
];

function Result( {correct, gameAgain} ) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='' />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <button onClick={() => gameAgain()} >Попробовать снова</button>
    </div>
  );
}

function Game( {step, question, onClickVariant} ) {
  const persentage = Math.round((step/questions.length) * 100);
  console.log(persentage);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${persentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map( (text, index) => (
            <li onClick={() => onClickVariant(index)} key = {text}>{text}</li>
          ))
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  console.log(question);

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if(index === question.correct){
      setCorrect(correct + 1);
    }
  }
  const gameAgain = () => {
    setStep(0);
    setCorrect(0);
  }
  return (
    <div className="App">
      {
        step !== questions.length ? <Game step = {step} question = {question} onClickVariant = {onClickVariant}/> 
        : <Result correct = {correct} gameAgain = {gameAgain} />
      }
    </div>
  );
}

export default App;
