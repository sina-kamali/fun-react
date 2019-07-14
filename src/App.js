import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 29 },
      { name: "Manue", age: 20 },
      { name: "Alex", age: 18 }
    ],
    showPerson : true
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "Manu-2", age: 20 },
        { name: "Alex-2", age: 18 }
      ]
    });
  };

  togglePersonsHandler = () => {
    this.setState({showPerson: !this.state.showPerson});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 29 },
        { name: event.target.value, age: 20 },
        { name: "Alex-2", age: 18 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Lets Managing Some Lists At the bottom!</h1>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {
          this.state.showPerson ?
        <div>
          <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={()=> this.switchNameHandler("NewName")}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed = {this.nameChangedHandler}
        >
          Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        </div> : null
        }
        
      </div>
    );
  }
}

export default App;
