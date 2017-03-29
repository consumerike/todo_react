import React from 'react';
//CSS requires
import './css/todoItem.css';

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


    handleDelete() {
        this.props.onDelete(this.props.item);
    }


}

module.exports = TodoItem;

//Create TodoItem component the react way
/*var TodoItem = React.createClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name" ref="thisItem">{this.props.item}</span>
                    <span className="item-remove" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        );
    },

    //Custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.item);
    }
});
*/

