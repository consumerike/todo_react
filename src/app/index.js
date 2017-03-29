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

    handleDelete() {
        this.props.onDelete(this.props.item);
    }


// To insert component into HTML:
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));


