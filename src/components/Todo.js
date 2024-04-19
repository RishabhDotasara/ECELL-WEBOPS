import React, { useState } from 'react'
import { FaTasks } from "react-icons/fa";
import FileComponent from './FileComponent';

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
                    <FileComponent title={todo.title} by={todo.by}/>
                )
            })}
      </div>
    </>
  )
}
