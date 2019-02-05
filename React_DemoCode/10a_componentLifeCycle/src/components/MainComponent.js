import React from 'react';
import ReactDOM from 'react-dom';
import InnerComponent from './InnerComponent';

export default class MainComponent extends React.Component {

    constructor(props) {
		    super(props);

        this.handleTextInput = this.handleTextInput.bind(this);
        
        this.state = {
          name: "Ram"
        };
    }

    handleTextInput(event) {
      this.setState({name: event.target.value});
    }

    render() {
        var name = this.state.name;
        return (
            <div>
                <h1>Main Component Heading</h1>
                <input type="text" onInput={this.handleTextInput}/><br/><br/>
                {name}<br/><br/>
                <InnerComponent myname={this.state.name}></InnerComponent>
            </div>
        );
    }
}
