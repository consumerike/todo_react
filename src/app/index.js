import React from 'react';
import ReactDOM from 'react-dom';
// require('./css/index.css');
import './css/index.css';
//import necessary components:
import TodoItem from './todoItem';
import AddItem from './addItem';
//creating the first component
import {Router, Route} from "react-router";

const App = () {
    return (
        <Router>
            <Route path={'/'} component={TodoComponent}></Route>
        </Router
    )
}

// OR
/*
const App = React.createClass({
    render: function() {
        return (
            <Router>
                <Route path={''}></Route>
            </Router
        )
    }
})
*/

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
                <h1>Hey World!</h1>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    }

    onDelete(item){
        // let updatedTodos = {...this.state.todos} If making a copy to change
        // state...
        let updatedTodos = this.state.todos.filter(function(val,index){
            return item ==! val;
        });
        this.setState({
            todos: updatedTodos
        });
    }

    onAdd(item) {
        let updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    }

    componentWillMount () {
        console.log("mounting component");
    }

    componentDidMount () {
        console.log("component mounted");
    }


}


// To insert component into HTML:
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));


