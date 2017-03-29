import React from 'react';
import ReactDOM from 'react-dom';

//creating the first component
class TodoComponent extends React.component {
    constructor(props) {
        super(props);
        this.state = {todos: ['wash', 'eat cheese', 'nap']}
    }
    //OR getInitialState: function(){ return {state}}
    render() {
        let todos = this.state.todos;
        todos = todos.map(function(item, index) {
            return (
                <li>{item}</li>
            );
        })
        return (
            <div>
                <h1>Hey World!</h1>
                <ul>{todos}</ul>
            </div>
        );
    }
}

// To insert component into HTML:
ReactDom.render(<TodoComponent />, document.getElementById("todo-wrapper"));


