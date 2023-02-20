import axios from 'axios';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import React, { useState, useEffect } from 'react';

function Sample() {
  const [questionID, setQuestionID] = useState('AreaUnderTheCurve_1');
  const [questionData, setQuestionData] = useState(null);

  const handleNextClick = () => {
    const questionIDs =  ['AreaUnderTheCurve_1', 'AreaUnderTheCurve_2','AreaUnderTheCurve_5', 'BinomialTheorem_3', 'BinomialTheorem_4'];
    const currentIndex = questionIDs.indexOf(questionID);
    if (currentIndex < questionIDs.length - 1) {
      setQuestionID(questionIDs[currentIndex + 1]);
    }
  }

  const handleBackClick = () => {
    const questionIDs = ['AreaUnderTheCurve_1', 'AreaUnderTheCurve_2','AreaUnderTheCurve_5', 'BinomialTheorem_3', 'BinomialTheorem_4'];
    const currentIndex = questionIDs.indexOf(questionID);
    if (currentIndex > 0) {
      setQuestionID(questionIDs[currentIndex - 1]);
    }
  }

  useEffect(() => {
    async function fetchQuestionData() {
      try {
        const res = await axios.get(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionID}`);
        // const data = await response.json();
        console.log(res.data)
        setQuestionData(res.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchQuestionData();
  }, [questionID]);



  return (
    <>
      <h1>Question ID: {questionID}</h1>
      {questionData && (
        <div>
          <MathJax>{questionData.Question}</MathJax>
          {/* <MathJax>{"\\begin{aligned}\n&\\begin{aligned}\n&\\text{ Solve : $\n\\int_{-1}^2|x| d x\n$}\\\\\n&\\text{(A) $\\frac{3}{2}$}\\\\\n&\\text{(B) 2}\\\\\n&\\text{(C) $\\frac{5}{2}$}\\\\\n&\\text{(D) 3}\n\\end{aligned}\n\\end{aligned}"}</MathJax> */}
        </div>
      )}
      <div style={{textAlign:"center",display:"flex",justifyContent:"space-between",marginLeft:"20%",marginRight:"20%"}}>
        <button style ={{backgroundColor:"#60B7F3",height:"30px",border:"none" }} onClick={handleBackClick}>Back</button>
        <button style ={{backgroundColor:"#60B7F3",height:"30px",border:"none" }} onClick={handleNextClick}>Next</button>
      </div>
    </>
  );
}

export default Sample;
