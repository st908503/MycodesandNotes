import React, { useContext } from 'react'
import { data, gender } from '../App'




const Component3 = () => {

const myName = useContext(data);
const myGender = useContext(gender);

  return (
    <div>
    <h1>Hi My name is {myName} and I am {myGender}</h1>
    </div>
  )
}

export default Component3