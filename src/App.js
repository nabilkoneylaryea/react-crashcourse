import './App.css';
import Todos from './components/Todos.js'
import { Component } from 'react';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Make dinner tonight',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with manager',
        completed: false
      }
    ]
  }
  render(){
    // PASSEED TODOS DOWN FROM STATE AS PROPS
    // console.log(this.state.todos);
    // console.log(this.props.todos);
    return (
      <div className="App">
        {/* PASSING PROPS HERE */}
        <Todos todos={this.state.todos} />
      </div>
    );
  }
  
}

export default App;
