import React, { useState } from 'react'
import classes from './Input.module.css'

const Input  = () => {
    const [input, setInput] = useState('')

    const addTodo = () => {
    
    }


    return <div className={classes.input} >
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
        <button onClick={addTodo} >Add!</button>
    </div>
}

export default Input