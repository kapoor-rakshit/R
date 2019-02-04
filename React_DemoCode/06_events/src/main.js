import React from 'react';
import ReactDOM from 'react-dom';

class ReactComponent extends React.Component {
    constructor(props) {
      super(props);
      this.addFuncvar = this.add.bind(this);
      this.editFuncvar = this.edit.bind(this);
      this.deleteFuncvar = this.delete.bind(this);
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
                {this.props.agenda}
                <h2>{this.props.children}</h2>
                <button onClick={this.addFuncvar}> Add ka Button</button>
                <button onClick={this.editFuncvar}> Edit ka Button</button>
                <button onClick={this.deleteFuncvar}> Delete ka Button</button>
            </div>
            );
    }
}

ReactDOM.render(<ReactComponent agenda="Agenda">Event Demo</ReactComponent>,
    document.getElementById('mycontainer'));
