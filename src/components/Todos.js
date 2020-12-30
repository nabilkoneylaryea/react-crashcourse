import {Component} from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component{
    render(){
        // IG WE USE PARENTHESES INSTEAD OF BRACKETS FOR ARROW FUNCTIONS???
        return this.props.todos.map((todo) => (
            <Todoitem key={todo.id} todo={todo} />
        ));
    }
}

// PROPTYPES
// propTypes needs to be lower case to reference object belonging to Todos class
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;