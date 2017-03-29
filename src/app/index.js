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
                <TodoItem item={item} key={index} onDelete={this.onDelete} />
            );
        }.bind(this));
        return (
            <div>
                <h1 onClick={this.click}>Hey World!</h1>
                <ul>{todos}</ul>
            </div>
        );
    }

    onDelete(item){
        // let updatedTodos = {...this.state.todos} If making a copy to change
        // state...
        let updatedTodos = updatedTodos.filter(function(val,index){
            return item ==! val;
        });
        this.setState({
            todos: updatedTodos
        });
    }
}

class TodoItem extends React.Component {
    render () {    
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}>x</span>
                </div>
            </li>
        );
    }

}

    handleDelete() {
        this.props.onDelete(this.props.item);
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


