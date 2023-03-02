import React from 'react'
import { data, gender } from '../App'


const Component3 = () => {
    return (
        <data.Consumer>
            {
                (name) => {
                    return (
                        <gender.Consumer>
                        {
                            (sex)=>{
                                return (
                                    <h1>Hii my name is {name} and I am {sex}</h1>
                                )
                            }
                        }
                        </gender.Consumer>
                        )
                }
            }
        </data.Consumer>


    )
}

export default Component3