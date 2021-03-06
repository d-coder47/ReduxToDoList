import React from 'react';
import Input from './components/Input/Input';
import './App.css';
import TodoItem from './components/ToDoItem/TodoItem';

import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todoSlice'

function App() {

  const todoList = useSelector(selectTodoList)

  return (
    <div className="app">
      <header className="App-header">
        todo list
        <div className="app__container" >
          <div className="app__todoContainer" >
            { todoList.map(item => (
              <TodoItem 
                name={item.item}
                done={item.done}
                id={item.id}
              />
            )) }
            <Input />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
