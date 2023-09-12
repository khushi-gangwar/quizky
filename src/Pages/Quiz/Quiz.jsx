import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { QuizData } from "../../Data/Data";
import QuizResult from './QuizResult';
import { Link } from "react-router-dom";
const Quiz = () => {
    const [timeLeft, setTimeLeft] = useState(10); // Time limit in seconds
  const [isTimeUp, setIsTimeUp] = useState(false); // tells time up or not
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [score, setscore] = useState(0);
  const [ClickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
useEffect(()=>{
    if(timeLeft===0){
    setIsTimeUp(true);
  }
  
  else{
    const timer=setTimeout(()=>setTimeLeft(timeLeft-1),1000);
    return ()=>clearTimeout(timer)
  }
},[timeLeft])

const handleAnswer=()=>{
  setTimeLeft(10);
  setIsTimeUp(false);
}

  const changeQuestion = () => {
    if (currentQuestion < QuizData.length - 1) {
      updateScore();
      setcurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
      handleAnswer();
    } else {
      setShowResult(true)
    }
  };
  const updateScore = () => {
    if (ClickedOption === QuizData[currentQuestion].answer) {
      setscore(score + 1);
    }
  };
  const resetAll=()=>{
    setShowResult(false);
    setcurrentQuestion(0);
    setClickedOption(0);
    setscore(0);
}
  return (
    <div className="main">
      <p className="heading text-center">Quiz</p>

      <div className="container ">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
          {isTimeUp ? (      <div className=" my-auto" style={{display:"flex",flexDirection:"column",alignItems:"center"}}><h1 className="timer">Time's up!
      </h1>
     <p style={{color:"black"}}>  score={score}<br/>
            TotalScore={QuizData.length}</p>
             <div className="restart" ><Link to="/select"   class="btn btn-outline-dark">Restart </Link></div>
             </div>   
      ) :
      //showing question
       (
        <>
        <div style={{color:"black"}}>Time left: {timeLeft} seconds</div>
    <div className="question">
          <span id="question-number">{currentQuestion + 1}</span>
          <span id="question-txt">{QuizData[currentQuestion].question}</span>
        </div>
        <div className="option-container">
          {QuizData[currentQuestion].options.map((options, i) => {
            return (
              <button
                //  className='option-btn'
                className={`option-btn ${
                  ClickedOption === i + 1 ? "checked" : null
                }`}
                onClick={() => {
                  setClickedOption(i + 1);
                }}
              >
                {options}
              </button>
            );
          })}
        </div>
        <input
          type="button"
          id="next-button"
          value="Next"
          onClick={changeQuestion}
        />
        </>
       )}
      
          </>

        )}
   
      </div>
    </div>
  );
};

export default Quiz;
