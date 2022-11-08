import './App.css';
import React, {useState} from 'react'
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  //setting state of todo items
  const [todo, setTodo] = useState({
    title: "",
    complete: false
  })
  //don't understand why i have an empty array
  const [todoList, setTodoList] = useState([])
  return (
    //re-call all the properties in each componenent that I use
    <div className="App">
      <ToDoForm todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
      <ToDoList setTodoList = {setTodoList} todoList={todoList}/>
    </div>
  );
}

export default App;
