import { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Georg', age: 30 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 55 }
      ]
    })
  }

  render() {
    return (
      <div className="App" >
        <h1>Hi I´m a react app</h1>

        <button onClick={this.switchNameHandler.bind(this, 'TestHans')}>
          Switch Name Handler
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
        />
      </div>
    );
  }
}

export default App;
