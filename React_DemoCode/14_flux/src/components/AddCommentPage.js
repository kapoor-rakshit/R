import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentActions from '../actions/CommentActions';

class AddCommentPage extends React.Component {
    constructor(props) {
      super(props);
      this.saveComment = this.saveComment.bind(this);
    }

    saveComment(comment) {
// F2:
        CommentActions.addComment(comment);
        this.props.history.push('/');
    }

    render() {
        return (
            <CommentForm onSave={this.saveComment} />
        );
    }
}

export default withRouter(AddCommentPage);
