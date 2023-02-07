"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import "./TodoForm.css"

const addTodo = async (name: string, refresh: () => void) => {
    await fetch("http://localhost:3001/api/todo/add",{
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({name})
    })
    refresh();
}

export default function TodoForm() {
    const router = useRouter();
    const [name,setName] = useState("");  
    return (
        <div className='todo-form'>
            <input type="text" placeholder="Add Todo Here" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => addTodo(name,router.refresh)}>Add</button>
        </div>
    )
}
