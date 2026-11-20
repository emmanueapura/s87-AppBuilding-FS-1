import { defineStore } from 'pinia';
import { reactive } from 'vue';
import api from '../api';

export const useGlobalStore = defineStore('global',() => {
	
	let user = reactive({
		token: localStorage.getItem('token'),
		email: null,

	})

	async function getUserDetails(token){
		
		if(!token) {
			user.token = null;
			user.email = null;
			return;
		}

		

		try {
			localStorage.setItem('token', token);

			let { data } = await api.get('/users/details');

			user.token = token;
            user.email = data.email;
		} catch (error) {
			console.error(error);

			user.token = null;
			user.email = null;
			localStorage.removeItem('token');
		}
	}

	return {
		user,
		getUserDetails
	}
})