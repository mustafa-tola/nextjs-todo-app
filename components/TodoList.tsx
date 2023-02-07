import React from 'react'
import TodoItem from './TodoItem';
import "./TodoList.css"

const getTodos = async () => {
    let todos = await fetch("http://localhost:3000/api/todo/list");
    return todos.json();
}

export default async function TodoList() {
    const todos = await getTodos();
    return (
        <ul className="todo-list">
            {todos.todos.map((todo: any) => (
                <TodoItem todo={todo}/>
            ))}
        </ul>
    )
}
