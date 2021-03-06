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
        <div className="app__container" >
          <h1> Todo APP </h1>
          <div className="app__todoContainer" >
            { todoList.map(item => (
              <TodoItem 
                name={item.item}
                done={item.done}
                id={item.id}
              />
            )) }
          </div>
          <Input />
        </div>
      </header>
    </div>
  );
}

export default App;
