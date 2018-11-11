import React from 'react';
import ReactDOM from 'react-dom';

class ReactComponent extends React.Component {
    constructor(props) {
      super(props);
      this.add = this.add.bind(this);
      this.edit = this.edit.bind(this);
      this.delete = this.delete.bind(this);
    }
    add() {
        alert('Add clicked');
    }
    edit() {
        alert('Edit clicked');
    }
    delete() {
        alert('Delete clicked');
    }
    render() {
        return (
            <div>
                <h2>{this.props.children}</h2>
                <button onClick={this.add}>Add</button>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.delete} >Delete</button>
            </div>
            );
    }
}

ReactDOM.render(<ReactComponent>Event Demo</ReactComponent>,
    document.getElementById('mycontainer'));
