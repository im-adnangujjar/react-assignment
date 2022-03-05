import React from 'react'
import'./ButtonStyle.css'



export default function  Button(props) {
    return(
        <div className='Button'>
           {props.btntext }
        </div>
    )
    
}