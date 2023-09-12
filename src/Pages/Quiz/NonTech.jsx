import React, { useState,useEffect } from "react";
import "./Quiz.css";
import { NonQuizData } from "../../Data/ntdata";
import QuizResult from './QuizResult';


import { Link } from "react-router-dom";


const Quiz = () => {
  const [timeLeft, setTimeLeft] = useState(10); // Time limit in seconds
  const [isTimeUp, setIsTimeUp] = useState(false); // tells time up or not
  const [currentQuestion, setcurrentQuestion] = useState(0); 
  const [score, setscore] = useState(0);
  const [ClickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false); // show result or not
  
  useEffect(() => {  //timer
    if (timeLeft === 0) {
      setIsTimeUp(true);
    } else {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]); 

  const handleAnswer = () => {
    // Reset the timer for the next question
    setTimeLeft(10);
    setIsTimeUp(false);
  };

  const changeQuestion = () => {
    if (currentQuestion < NonQuizData.length - 1) {
      updateScore();  //inc score
      setcurrentQuestion(currentQuestion + 1); //next ques
      setClickedOption(0);  //no option click
      handleAnswer(); //timer starts
    } else {
      setShowResult(true) //if currentq > n then show result
    }
  };

  const updateScore = () => {
    if (ClickedOption === NonQuizData[currentQuestion].answer) {  //if clicked option is same as ans inc score
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
            totalScore={NonQuizData.length}
            tryAgain={resetAll} 
          />
        ) : (
          <>
               {/* showing question in which it can show time up or the question*/}
               {isTimeUp ? (
                     <div className=" my-auto" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
       <h1 className="timer">Time's up!
      </h1>
    <p style={{color:"black"}}>  score={score}<br/>
           TotalScore={NonQuizData.length}
      </p>
            <div className="restart" ><Link to="/select"   class="btn btn-outline-dark">Restart </Link></div>
        </div> 
               ) : (
                <>
        <div style={{color:"black"}}>Time left: {timeLeft} seconds
        <div className="warning" style={{backgroundColor:"red" ,color:"white",fontWeight:"bolder"}}>{(timeLeft<5) ? <p>Time is running out</p> : "" }</div></div>
        
    <div className="question">
          <span id="question-number">{currentQuestion + 1}</span>
          <span id="question-txt">{NonQuizData[currentQuestion].question}</span>
        </div>
        <div className="option-container">
          {NonQuizData[currentQuestion].options.map((options, i) => {
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
               ) }
          </>
        ) }
        </div>
    </div>
  );
  }

export default Quiz;
