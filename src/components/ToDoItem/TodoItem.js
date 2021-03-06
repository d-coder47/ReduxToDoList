import { Checkbox } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { checkTodo, removeTodo } from '../../features/todoSlice'
import './TodoItem.css'

const TodoItem  = ({ name, done, id }) => {

    const dispatch = useDispatch()

    const handleCheck = () => {
        dispatch(checkTodo({id}))
    }

    const handleRemove = () => {
        dispatch(removeTodo({id}))
    }
    
    return <div className="todoItem__container" > <div className="todoItem" >
        <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
        <p className={done && 'todoItem__done'} >{name}</p>        
    </div>
    <button className="button" onClick={handleRemove} >X</button>
    </div>
}

export default TodoItem