import React from 'react' 
import './ToDoForm.css'

function ToDoForm ({todo, setTodo, todoList, setTodoList}) {
    function handleChange (event) {
        // console.log(event.target.value, 'event value')
        setTodo({
            //setting the title valye to whatever the text input is and the complete value automatically to false
            title: event.target.value,
            complete: false
        })
    }
    function handleSave (event) {
        event.preventDefault()
        // todoList.push(todo)
        //don't know what this is doing here
        setTodoList (
            [...todoList, todo])
        // console.log(todoList, 'todoList')
        //restating the title and complete values after a to do item has been made
        setTodo({
            title: '',
            complete: false,
        })
    }
    return (
        <div className='Form-field'>
            <form className='Form'>
                <label className='Label'>
                    To Do:
                <input className='Input-field' type='text' name='todo' value={todo.title} onChange={handleChange}/>
                </label>
                <button className='Button' onClick={handleSave}>Save</button>
            </form>
        </div>
    )
    }
export default ToDoForm