const { useState } = React;
function App() {
    const answer = "366 days";
    const answer2 = "Paris";
    const answer3 = "Javascript";
    const answer4 = "SQL";
    const answer5 = "15";

    const [userAnswer, setUserAnswer] = useState("");
    const [congrats, setCongrats] = useState("");
    const [hideNextQuestion, setHideNextQuestion] = useState(true)
    const [hideQ1, setHideQ1] = useState(false)
    const [hideQ2, setHideQ2] = useState(true)
    const [hideQ3, setHideQ3] = useState(true)
    const [hideQ4, setHideQ4] = useState(true)
    const [hideQ5, setHideQ5] = useState(true)
    const [hideFinish, setHideFinish] = useState(true)


    function checkAnswer() {
        if (userAnswer.toLowerCase() == answer.toLowerCase()) {
            setCongrats("Answer is right!")
            setHideNextQuestion(false)
        } else {
            setCongrats("Answer is wrong")
        }
    };

    function checkAnswer2() {
        if (userAnswer.toLowerCase() == answer2.toLowerCase()) {
            setCongrats("Answer is right!")
            setHideNextQuestion(false)
        } else {
            setCongrats("Answer is wrong")
        }
    }

    function checkAnswer3() {
        if (userAnswer.toLowerCase() == answer3.toLowerCase()) {
            setCongrats("Answer is right!")
            setHideNextQuestion(false)
        } else {
            setCongrats("Answer is wrong")
        }
    }

    function checkAnswer4() {
        if (userAnswer.toLowerCase() == answer4.toLowerCase()) {
            setCongrats("Answer is right!")
            setHideNextQuestion(false)
        } else {
            setCongrats("Answer is wrong")
        }
    } 

    function checkAnswer5() {
        if (userAnswer.toLowerCase() == answer5.toLowerCase()) {
            setCongrats("Answer is right!")
            setHideNextQuestion(false)
        } else {
            setCongrats("Answer is wrong")
        }
    }

    function nextQuestion() {
        setHideQ1(true)
        setHideQ2(false)
        setUserAnswer("")
        setCongrats("")
        setHideNextQuestion(true)
    }

    function nextQuestion2() {
        setHideQ2(true)
        setHideQ3(false)
        setUserAnswer("")
        setCongrats("")
        setHideNextQuestion(true)
    }

    function nextQuestion3() {
        setHideQ3(true)
        setHideQ4(false)
        setUserAnswer("")
        setCongrats("")
        setHideNextQuestion(true)
    }

    function nextQuestion4() {
        setHideQ4(true)
        setHideQ5(false)
        setUserAnswer("")
        setCongrats("")
        setHideNextQuestion(false)
    }

    function finish() {
        setHideQ4(true)
        setHideFinish(false)
        setUserAnswer("")
        setCongrats("")
        setHideNextQuestion(true)
    }

    function restart() {
        setHideFinish(true)
        setHideQ1(false)
        setUserAnswer("")
        setCongrats("")
        setHideNextQuestion(true)
    }

    return(
        <>
        <div className="q1" hidden={hideQ1}>
            <h1>Quiz!</h1>
            <h1>How many days are in a leap year?</h1>
            <input type="text" placeholder="Enter your answer here" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} className="cssinput"></input>
            <p>{congrats}</p>
            <button onClick={checkAnswer} className="button">Submit</button>
            <button hidden={hideNextQuestion} className="button" id="nextQuestion" onClick={nextQuestion}>Next Question</button>
        </div>
        <div className="q2" hidden={hideQ2}>
            <h1>Quiz!</h1>
            <h1>What is the capital of France?</h1>
            <input type="text" placeholder="Enter your answer here" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} className="cssinput"></input>
            <p>{congrats}</p>
            <button className="button" onClick={checkAnswer2}>Submit</button>
            <button className="button" hidden={hideNextQuestion} id="nextQuestion" onClick={nextQuestion2}>Next Question</button>
        </div>
        <div className="q3" hidden={hideQ3}>
            <h1>Quiz</h1>
            <h1>What is the language that runs in the browser?</h1>
            <input type="text" placeholder="Enter your answer here" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} className="cssinput"></input>
            <p>{congrats}</p>
            <button className="button" onClick={checkAnswer3}>Submit</button>
            <button className="button" hidden={hideNextQuestion} id="nextQuestion" onClick={nextQuestion3}>Next Question</button>
        </div>
        <div className="q4" hidden={hideQ4}>
            <h1>Quiz!</h1>
            <h1>What is the language commonly used in databases?</h1>
            <input type="text" placeholder="Enter your answer here" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} className="cssinput"></input>
            <p>{congrats}</p>
            <button className="button" onClick={checkAnswer4}>Submit</button>
            <button className="button" hidden={hideNextQuestion} id="nextQuestion" onClick={nextQuestion4}>Finish</button>
        </div>
        <div className="q5" hidden={hideQ5}>
            <h1>Quiz!</h1>
            <h1>x + 15 = 30. Find x.</h1>
            <input type="text" placeholder="Enter your answer here" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} className="cssinput"></input>
            <p>{congrats}</p>
            <button className="button" onClick={checkAnswer5}>Submit</button>
            <button className="button" hidden={hideNextQuestion} id="nextQuestion" onClick={finish}>Finish</button>
        </div>
        <div className="finish" hidden={hideFinish}>
            <h1>Congratulations!</h1>
            <h1>You've completed the Quiz!</h1>
            <button className="button" id="nextQuestion" onClick={restart}>Restart Quiz</button>
        </div>
        </>
    )
}