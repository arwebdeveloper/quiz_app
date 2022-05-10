import React, { useState } from "react";
import questions from "./questions/data.json";
import Result from "./Result";
const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [optionSelected, setOptionSelected] = useState({});
  const [showingResult, setShowingResult] = useState(false);
  const [correntAns,setCorrectAns] = useState({});
  const [isChecked,setIsChecked] = useState('');

  const nextQuestion = () => {
    if (questionNumber < questions.length) {
      setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
    }
    setIsChecked('');
  };

  const handleChange = (e) => {
    if(e.target.value===questions[questionNumber].answer){
        setCorrectAns({...correntAns,[e.target.name]:true});
    }
    setIsChecked(e.target.value);
    setOptionSelected({ ...optionSelected, [e.target.name]: e.target.value });
  };

  const showResult = () => {
    setShowingResult(true);
  };

  return (
    <div>
      {showingResult ? (
        <>
          <h2 style={{color:'blue'}}>Your quiz result is here!</h2>
          <Result
            totalQuestions={questions.length}
            attemptedQuestions={Object.keys(optionSelected).length}
            correctAnswer={Object.keys(correntAns).length}
          />
        </>
      ) : (
        <>
          <h4>{questionNumber+1}{". "}{questions[questionNumber].question}</h4>
          <form  >
            {questions[questionNumber].options.map((option, index) => {
              return (
                <div key={index}>
                  <input
                    id={index}
                    type="radio"
                    value={option}
                    name={questions[questionNumber].name}
                    onChange={handleChange}
                    checked={option===isChecked}
                  />
                  <label htmlFor={index}>{option}</label>
                </div>
              );
            })}
          </form>
        </>
      )}
      {questionNumber === questions.length - 1 ? (
        <button onClick={showResult}>Finish</button>
      ) : (
        <button onClick={nextQuestion}>Next</button>
      )}
    </div>
  );
};

export default Quiz;
