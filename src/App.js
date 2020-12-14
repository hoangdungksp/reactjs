//Lesson 1: import ColorBox from './components/ColorBox'
import ToDoList from './components/ToDoList'
import React, { useState } from 'react'

function App() {
  const todoListInit = [
    {
      id: 1,
      name: "To do list of today",
      status: true
    },
    {
      id: 2,
      name: "To do list of tomorrow",
      status: false
    },
    {
      id: 3,
      name: "To do list of the day of tomorrow",
      status: false
    }
  ];

  const [todoList, setTodoList] = useState(todoListInit);

  const handleTodoClick = (todo) => {
     console.log(todo);
    // const newTodoList = todoList.splice(event.target.id, 1);
    // return setTodo(newTodoList);
  }

  return (
    <div className="App">
      <h1>React hooks - TodoList</h1>
      {/* Lesson 1 <ColorBox/> */}
      <ToDoList todos={todoList} onToDoClick={handleTodoClick}></ToDoList>
    </div>
  );
}

export default App;
