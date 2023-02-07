"use client"
import { Todo } from '@/types/Todo'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'
import { useRouter } from 'next/navigation'
import React from 'react'
import "./TodoItem.css"

const updateTodo = async (id: string, completed: boolean,refresh:() => void) => {
    await fetch("http://localhost:3001/api/todo/update", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({id,isDone:completed})
    })
    refresh();
}

const deleteTodo = async (id: string, refresh: () => void) => {
    await fetch(`http://localhost:3001/api/todo/delete?id=${id}`,{mode: 'no-cors'})
    refresh();
}

interface Props {
    todo: Todo;
}

export default function TodoItem({todo}: Props) {
    const router:AppRouterInstance = useRouter();
    return (
        <li className="todo-item" key={todo.id}>
            <input
                type="checkbox"
                onChange={(e) => updateTodo(todo.id,e.target.checked,router.refresh)}
                checked={todo.completed}
            />
            <span>{todo.text}</span>
            <button className="delete-button" onClick={() => deleteTodo(todo.id,router.refresh)}>Delete</button>
        </li>
    )
}