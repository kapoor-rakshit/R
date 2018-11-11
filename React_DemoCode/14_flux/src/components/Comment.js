import React from 'react';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(event) {
    event.preventDefault();
    console.log("***** " + this.props.author);
    console.log("***** " + this.props.children);
    console.log("***** " + this.props.id);
    this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <tr>
        <td>{this.props.author}</td>
        <td>{this.props.children}</td>
        <td><a href="about:blank" onClick={this.onDelete}>Delete</a></td>
      </tr>
    );
  }
}
