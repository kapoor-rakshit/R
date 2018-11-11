import Dispatcher from '../dispatcher/Dispatcher';
import * as ActionTypes from '../constants/ActionTypes';
import { EventEmitter } from 'events';
import _ from 'lodash';

let _comments = [];

class CommentStoreClass extends EventEmitter {
    addChangeListener(cb) {
      this.on('change', cb);
    }

    removeChangeListener(cb) {
      this.removeListener('change', cb);
    }

    emitChange() {
      this.emit('change');
    }

    getAllComments() {
      return _comments;
    }
}

let CommentStore = new CommentStoreClass();
export default CommentStore;

Dispatcher.register(action => {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _comments = action.comments;
            CommentStore.emitChange();
          break;
        case ActionTypes.ADD_COMMENT:
            _comments.push(action.comment);
            CommentStore.emitChange();
            break;
        case ActionTypes.DELETE_COMMENT:
            _.remove(_comments, comment => (action.id === comment.id));
            console.log("Emitting Delete Change..." + action.id);
            CommentStore.emitChange();
            break;
        default:
    }
});
