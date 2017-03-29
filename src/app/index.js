import React from 'react';
import ReactDOM from 'react-dom';

//creating the first component
class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: ['wash', 'eat cheese', 'nap']}
    }
    //OR getInitialState: function(){ return {state}}
    render() {
        let todos = this.state.todos;
        //OR would it be better to copy state here?
        //let todos = {...this.state.todos}
        todos = todos.map(function(item, index) {
            return (
                <TodoItem item={item} key={index} />
            );
        }.bind(this));
        return (
            <div>
                <h1 onClick={this.click}>Hey World!</h1>
                <ul>{todos}</ul>
            </div>
        );
    }
}

class TodoItem extends React.Component {
    render () {    
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                </div>
            </li>
        );
    }

}

/* OR
Create a todo item react-way
 let todoItem = React.createClass({
    render: function(){
         return (

        );
    }
 });
*/

// To insert component into HTML:
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));


