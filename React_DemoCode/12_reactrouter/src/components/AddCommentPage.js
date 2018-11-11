import React from 'react';
import  {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import CommentForm from './CommentForm';
import AllCommentsPage from './AllCommentsPage';
import CommentApi from '../data/CommentApi';

class AddCommentPage extends React.Component {
    constructor(props) {
      super(props);
      this.saveComment = this.saveComment.bind(this);
    }

    saveComment(comment) {
        CommentApi.saveComment(comment);
        this.props.history.push('/');
    }

    render() {
        return (
            <CommentForm onSave={this.saveComment} />
        );
    }
}

export default withRouter(AddCommentPage);
