import React, { useState } from 'react'
import './Second.css';

const Second = () => {
   
    const bioData = [
        {
            id: 0,
            name: 'Shashank',
            age: 23
        },
        {
            id: 1,
            name: 'Sahil',
            age: 24
        },
        {
            id: 2,
            name: 'Mayank',
            age: 27
        },
        {
            id: 4,
            name: 'Shivam',
            age: 22
        },

    ]

    const[state,setState] = useState(bioData);

    const clearData = () =>{
            setState([])
    }


    return (
        <>
        <div className='container'>
            {
                state.map((item) => {
                    return (
                        
                        <h1 key={item.id}>My name is {item.name} and my age is {item.age}</h1>
                       
                    )
                })
            }
            <button onClick={clearData} className='btn'>Clear Data</button>
            </div>
        </>
    )
}

export default Second