import React, { useState } from 'react'
import './Third.css'

const Third = () => {
    const [myObject, setMyObject] = useState([{
        myName: "Sahil", myAge: 24, nationality: 'Indian',
       
    }]);

    const changeObject = () =>{
        setMyObject({...myObject, myName:"Shashank"})
    }

  return (
    <div className='container'>
    <div className="content">
    <h1 className=''> Name: {myObject.myName} & Age : {myObject.myAge} & Nationality: {myObject.nationality}</h1>
    <button className='btn'>Delete</button>
    </div>
    <button className='btn' onClick={changeObject}>Update</button>
    </div>
  )
}

export default Third