import React from 'react'
import ToDo from './ToDo'
import './ToDoList.css'

function ToDoList ({todoList, setTodoList}) {
    // console.log(todoList)
    return (
        <div className='Todo'>
            {todoList.map((item, idx) => {
                //I don't know the purpose of this map
                return (
                    <ToDo className='List' todoList={todoList} setTodoList={setTodoList} id={idx} key={idx} todo={item}/>
                )
            })}
        
        </div>
    )
}
export default ToDoList