import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './CommentList';
import CommentApi from '../data/CommentApi';

export default class AllCommentsPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: []
      };
    }
    componentDidMount() {
      CommentApi.getAllComments(data => this.setState({ comments: data}));
    }
    render() {
      return (
        <div>
            <h1>Comments</h1>
            <CommentList comments={this.state.comments} />
        </div>
      );
    }
}
