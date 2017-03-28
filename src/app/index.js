import React from 'react';
import ReactDOM from 'react-dom';

//creating the first component
class TodoComponent extends React.component {
    constructor(props) {
        super(props);
        this.state = {todos: ['wash', 'eat cheese', 'nap']}
    }
    render() {
        return (
            <div>
                <h1>Hey World!</h1>
                <ul>
                    <li>this.state.todos[0]</li>
                    <li>this.state.todos[1]</li>
                    <li>this.state.todos[2]</li>
                </ul>
            </div>
        );
    }
}

// To insert component into HTML:
ReactDom.render(<TodoComponent />, document.getElementById("todo-wrapper"));


