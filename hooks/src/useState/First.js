import React, { useState } from 'react'
import './First.css'

const First = () => {
    const [state, setState] = useState('Shashank Tripathi');

    const handleClick = () => {


        //for toggle between states
        let val = state;
        ( val === 'Shashank Tripathi' ? setState('Welcome Shashank on usState hook demo !!') : setState('Shashank Tripathi') )



        //for change the state one time
        // setState('Welcome Shashank on usState hook demo !!')

    }

    return (
        <div className='container'>
            <h1>{state}</h1>
            <button className='btn' onClick={handleClick}>Click me please</button>
        </div>
    )
}

export default First