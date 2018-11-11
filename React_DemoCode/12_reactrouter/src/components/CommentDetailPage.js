import React from 'react';

export default class CommentDetail extends React.Component {
  render() {
    return (
      <div>
        <h2> Param Passed = {this.props.match.params.id} </h2>
      </div>
    );
  }
}
