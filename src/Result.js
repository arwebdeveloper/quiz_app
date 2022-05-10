import React from 'react'

const Result = ({totalQuestions,attemptedQuestions,correctAnswer,incorrectAnswer}) => {
    const attemptedQuestioncolor =(val)=>{
        if(val<=9 && val>5){
            return "green"
        }if(val<=5 && val>3){
            return "orange"
        }
        return "red";
    }
  return (
    <div>
        <h3>Total Questions: {totalQuestions}</h3>
        <h3 style={{color:attemptedQuestioncolor(attemptedQuestions)}}>Attempted Question(s): {attemptedQuestions}</h3>
        <h3 style={{color:'green'}}>Correct Answers: {correctAnswer}</h3>
        <h3 style={{color: "red"}}>Incorrect Answers: {attemptedQuestions-correctAnswer}</h3>
    </div>
  )
}

export default Result