import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Georg', age: 30 }
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Hans', age: 55 }
      ]
    })
  }

  return (
    <div className="App" >
      <h1>Hi I´m a react app</h1>

      <button onClick={switchNameHandler}>
        Switch Name Handler
        </button>

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
    </div>
  );
}

export default App;

