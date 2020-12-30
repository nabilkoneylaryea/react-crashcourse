import { Component } from 'react';
import React from 'react';
// import { v4 as uuid } from 'uuid';
import './App.css';
import Todos from './components/Todos.js';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';


class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuid(),
      //   title: 'Take out the trash',
      //   completed: false
      // },
      // {
      //   id: uuid(),
      //   title: 'Make dinner tonight',
      //   completed: false
      // },
      // {
      //   id: uuid(),
      //   title: 'Meeting with manager',
      //   completed: false
      // }
    ]
  }
  
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}));
  }
  
// TOGGLE COMPLETE
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  // DELETE TODO
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }
  
  // ADD TODO
  addTodo = (title) => {
    // console.log(title);
    // const newTodo = {
    //   id: uuid(),
    //   title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    
  }

  render(){
    // PASSEED TODOS DOWN FROM STATE AS PROPS
    // console.log(this.state.todos);
    // console.log(this.props.todos);
    
    return (
      <Router>
        <div className="App">
          {/* PASSING PROPS HERE */}
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    );
  }
  
}

export default App;
