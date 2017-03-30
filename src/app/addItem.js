import React from 'react';
import './css/addItem.css';
/*   can also be done like so:
 require('./css/addItem.css');
*/


class AddItem extends React.Component {


    render() {
        return (
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem" />
                <input type="submit" value="Add"  />
            </form>
        );
    }

//start of custom functions
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.refs.newItem.value)
    }
}

/*
OR React-specific create class manner:

var AddItem = React.createClass({
    render: function(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem"/>
                <input type="submit" value="Hit me" />
            </form>
        );
    },
*/

module.exports = AddItem;
