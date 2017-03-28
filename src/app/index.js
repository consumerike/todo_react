import React from 'react';
import ReactDOM from 'react-dom';

//creating the first component
class TodoComponent extends React.component {
    render() {
        return (
            <h1>Hey World!</h1>
        );
    }
}

To insert component into HTML:
ReactDom.render(<TodoComponent />, document.getElementById("todo-wrapper"));


