import React from 'react';
import {withRouter, Prompt} from 'react-router-dom';

let authenticated = true;
class CommentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.setModified = this.setModified.bind(this);

    this.state = {
      modified: false
    };
  }

  componentWillMount() {
    this.authenticate(this.props);
  }

  authenticate(params) {
    const history = params.history;
    if (!authenticated) {
      alert("Not authenticated, hence redirecting back...");
      history.replace('/');
    }
    else {
      alert("Authenticated, hence proceeding ahead and displaying the details.")
    }
  }

  setModified() {
    this.setState({modified: true})
  }

  render() {
    return (
      <div>
        <label>ID: </label>
        <input type="text" defaultValue={this.props.match.params.id} onInput={this.setModified}/>
        <Prompt when={this.state.modified} message="Are you sure you want to leave ?" />
      </div>
    );
  }
}

export default withRouter(CommentDetail);
