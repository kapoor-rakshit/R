import Dispatcher from '../dispatcher/Dispatcher';
import CommentApi from '../data/CommentApi';
import * as ActionTypes from '../constants/ActionTypes';

export default class InitializeActions {
    static initComments() {
        const initialComments = CommentApi.getAllComments();

        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            comments: initialComments
        });
    }
}
