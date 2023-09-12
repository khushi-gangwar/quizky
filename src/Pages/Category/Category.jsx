import React, { useState } from 'react'
import './Category.css'
import Card from "../../Components/Card/Card"
const Category = ({sendQuestion}) => {
  const [dataset,setDataSet]=useState([]);
  const [isDataSet,isSetDataSet]=useState(false);

  return (
    <>
        <div className="top text-center">
            Pick up a predefined Quiz!
            Test your knowledge on a specific domain and rate youself!
        </div>
        <div className="bottom">
        <Card name="Web Development  Questions" link="/quiz " button="Start" />
        <Card name="Aptitude Questions" link="/aptitude" button="Start"/>

    <Card name="General Questions" link="/ntquiz" button="Start"/>

        </div>
    </>
  )
}

export default Category