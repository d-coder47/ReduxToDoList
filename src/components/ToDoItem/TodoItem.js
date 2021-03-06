import { Checkbox } from '@material-ui/core'
import React, { useState } from 'react'
import './TodoItem.css'

const TodoItem  = ({ name, done, id }) => {

    const handleCheck = () => {

    }
    
    return <div className="todoItem" >
        <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
        <p className={done && 'todoItem__done'} >{name}</p>
    </div>
}

export default TodoItem