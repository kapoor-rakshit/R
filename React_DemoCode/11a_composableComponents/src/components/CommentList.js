import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
  render () {
    var commentNodes = this.props.comments.map(comment => (
        <Comment key={comment.id} srno={comment.id} author={comment.author}>
          {comment.text}
        </Comment>
    ));
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
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
