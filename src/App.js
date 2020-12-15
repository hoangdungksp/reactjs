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
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0)
        return;
    const newTodoList = [...todoList];
      newTodoList.splice(index, 1);
    setTodoList(newTodoList);  

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
