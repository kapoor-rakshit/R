import axios from 'axios';

export default class CommentApi {
	static getAllComments(cb) {
		axios.get('http://localhost:3000/comments')
			.then(response => cb(response.data))
			.catch(error => {throw error});
	}
}
