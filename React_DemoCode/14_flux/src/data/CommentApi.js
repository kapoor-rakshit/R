import CommentData from './CommentData';
import _ from 'lodash';

let currentID = 3;
const _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

export default class CommentApi {
	static getAllComments() {
		return _clone(CommentData.comments);
	}

	static saveComment(comment) {
		currentID = currentID + 1;
    comment.id = currentID;
    CommentData.comments.push(comment);
		return _clone(comment);
	}

	static deleteComment(id) {
		_.remove(CommentData.comments, { id: id});
	}
}
