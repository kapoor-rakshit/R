import Dispatcher from '../dispatcher/Dispatcher';
import CommentApi from '../data/CommentApi';
import * as ActionTypes from '../constants/ActionTypes';

export default class CommentActions {
    static addComment(comment) {
        let newComment = CommentApi.saveComment(comment);
        console.log("Dispatching Add Comment ...");
        Dispatcher.dispatch({
            actionType: ActionTypes.ADD_COMMENT,
            comment: newComment
        });
    }

    static deleteComment(id) {
        CommentApi.deleteComment(id);
        console.log("Dispatching Delete Comment for id ..." + id);
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_COMMENT,
            id: id
        });
    }
}
