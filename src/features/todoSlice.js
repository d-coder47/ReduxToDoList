import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        checkTodo: (state, action) => {
            state.todoList.map(todo => todo.id === action.payload.id ? todo.done = !todo.done : null)
        },
        removeTodo: (state, action) => {
            const index = state.todoList.findIndex(todo => action.payload.id === todo.id)
            state.todoList.splice(index, 1)
        }
    }

});

export const { saveTodo, checkTodo, removeTodo } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer