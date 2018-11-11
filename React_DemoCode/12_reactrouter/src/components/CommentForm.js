import React from 'react';

export default class CommentForm extends React.Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (event) {
      event.preventDefault();
      var comment = {};
      comment.author = this.refs.author.value;
      comment.text = this.refs.commenttext.value;
      this.props.onSave(comment);
    }

    render() {
        return (
            <form>
                <h1>Add Comment</h1>
                Author:&nbsp;
                <input type="text"
                    ref="author" /><br/><br/>
                Comment Text: &nbsp;
                <input type="text"
                    ref="commenttext" /><br/><br/>
                <input type="submit" value="Save" onClick={this.onSubmit}/>
            </form>
        );
    }
}
