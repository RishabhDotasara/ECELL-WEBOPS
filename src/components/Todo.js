import React, { useState } from 'react'
import { FaTasks } from "react-icons/fa";

export default function Todo() {
    const [todos,setTodos] = useState([
        {
            title:"Task",
            by:"By Wednesday"
        },
        {
            title:"Task",
            by:"By Wednesday"
        },
        {
            title:"Task",
            by:"By Wednesday"
        },
    ])
  return (
    <>
        <div className="todos-header"><FaTasks style={{backgroundColor:"white"}}/></div>
        <div className="todos-todo">
            {todos.map((todo)=>{
                return (
                    <div className="todo">
                        <span className='title'>{todo.title}</span>
                        <span className='by'>{todo.by}</span>
                    </div>
                )
            })}
      </div>
    </>
  )
}
