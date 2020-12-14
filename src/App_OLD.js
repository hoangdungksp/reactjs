import './App.scss';
import Person from './components/Person';
import ExampleState from './components/ExampleState';
import React, { useState } from 'react';

function App() {
  const [persons, setPersons] = useState([
    { name: "Nguyen Van A", age: 1, gender: "male"},
    { name: "Nguyen Van B", age: 3, gender: "male" },
    { name: "Lam Thi C", age: 5, gender: "female" },
    { name: "Tran Van D", age: 11, gender: "male" }
  ]);
  const changeNameHandler = () => {
    setPersons ([
      { name: "Nguyen Van A", age: 10, gender: "male"},
      { name: "Nguyen Van B", age: 30, gender: "male" },
      { name: "Lam Thi C", age: 50, gender: "female" },
      { name: "Tran Van D", age: 110, gender: "male" }
    ]);
  }

  const changeNameInput = (event) => {
    setPersons ([
      { name: event.target.value, age: 10, gender: "male"},
      { name: event.target.value, age: 30, gender: "male" },
      { name: event.target.value, age: 50, gender: "female" },
      { name: event.target.value, age: 110, gender: "male" }
    ]);
  }
  return (
    <div className="App">
      <header className="App-header">        
        <Person
          changename={changeNameInput}
          click={changeNameHandler}
          name={persons[0].name}
          age={persons[0].age}
          gender={persons[0].gender}>
          love football
        </Person>
        <Person
          changename={changeNameInput}
          click={changeNameHandler}
          name={persons[1].name}
          age={persons[1].age}
          gender={persons[1].gender}>
          love cooking
        </Person>
        <Person
          changename={changeNameInput}
          click={changeNameHandler}
          name={persons[2].name}
          age={persons[2].age}
          gender={persons[2].gender}>
          love game
        </Person>
        <Person
          changename={changeNameInput}
          click={changeNameHandler}
          name={persons[3].name}
          age={persons[3].age}
          gender={persons[3].gender}>
          love walking
        </Person>
        <button onClick={() => changeNameHandler()}>Change name</button>
        
        <ExampleState></ExampleState>
      </header>
    </div>
  );
}

export default App;
