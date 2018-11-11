import React from 'react';
import Comment from './Comment';
import CommentActions from '../actions/CommentActions';

export default class CommentList extends React.Component {
  deleteComment(id) {
      console.log('Delete Comment from CommentList for id .... ' + id);
      CommentActions.deleteComment(id);
  }

  render() {
    var commentNodes = this.props.comments.map(comment => {
      return (
        <Comment key={comment.id} id={comment.id} author={comment.author} onDelete={this.deleteComment}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {commentNodes}
          </tbody>
        </table>
      </div>
    );
  }
}
