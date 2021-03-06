import React, { useState } from 'react'
import classes from './Input.module.css'

import { saveTodo } from '../../features/todoSlice'
import { useDispatch } from 'react-redux'

const Input  = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now(),
        }))
        setInput('')
    }


    return <div className={classes.input} >
        <input type="text" placeholder="add Todo" value={input} onChange={(event) => setInput(event.target.value)} />
        <button onClick={addTodo} >Add!</button>
    </div>
}

export default Input