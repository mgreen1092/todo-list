import React from 'react';
import './ToDoList.css'

//I had no idea how to change the completed status - Hayk helped me a lot
function ToDo({todo, id, todoList, setTodoList}) {
    console.log(todo)
    function handleClick (event) {
        event.preventDefault();
        todoList[id] = {title: todo.title, complete: !todo.complete}
        setTodoList(
            [...todoList]
        )
        // console.log(todoList)
    }
    return (
        <div className='Todo-List'>
            <div className='Div-list'>
                <p className='List'>{todo.title}</p>
                <p className='List2' onClick={handleClick}>{todo.complete ? 'Mark as incomplete' : 'Mark as Complete'} {todo.complete}</p>
            </div>
        </div>
    )
}

export default ToDo