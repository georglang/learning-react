import { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Georg', age: 30 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Hans', age: 55 }
      ]
    })
  }

  render() {
    return (
      <div className="App" >
        <h1>Hi I´m a react app</h1>

        <button onClick={this.switchNameHandler}>
          Switch Name Handler
        </button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      </div>
    );
  }
}

export default App;
