import { userData } from './userData';
import _ from 'lodash';

const delay = 5000;
let currentID = 3;

const _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

export default class UserApi { // MOCK API
	static getAllUsers() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], _clone(userData.users)));
			}, delay);
		});
	}

	static saveUser(user) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if(user.name.length < 1) {
					reject("User name must be at least 1 character.");
				}
				currentID = currentID + 1;
				user.id = currentID;
				userData.users.push(user);

				resolve(Object.assign({}, user));
			}, delay);
		});
	}

	static deleteUser(id) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				_.remove(userData.users, { id: id});
				resolve();
			}, delay);
		});
	}
}
