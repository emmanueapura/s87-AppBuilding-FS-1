<script setup>
	import {ref} from 'vue'
	import api from '../api.js';
	import {Notyf} from 'notyf'
	import {useGlobalStore} from '../stores/global.js'

	const notyf = new Notyf();

	const {getUserDetails} = useGlobalStore();

	const email = ref("");
	const password=ref("");

	async function handleSubmit(){
		try{
			let response = await api.post("/users/login",{
				email : email.value,
				password: password.value
			})
			
			localStorage.setItem("token",response.data.access);

			getUserDetails(response.data.access);

			notyf.success("login successfull")
		}
		catch(e){
			notyf.error("Login failed");
		}
	}
</script>
<template>
	<div class="container justify-content-center mx-auto">
		<h1 class="text-center">Log in</h1>
		<form @submit.prevent="handleSubmit" class="border mx-auto">
			<div class="col-5 mt-3 mb-3">
				<label>Email</label>
				<input type="text" class="form-control" v-model="email" required/>
			</div>
			
			<div class="mb-3">
				<label>password</label>
				<input type="password" class="form-control" v-model="password" required/>
			</div>
			<button type="submit">Submit</button>
		</form>
		
	</div>
</template>