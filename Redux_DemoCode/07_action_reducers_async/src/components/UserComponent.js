import React from 'react';

export default class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <li onClick={this.onDelete}> {this.props.name}, {this.props.location} </li>
    );
  }
}
