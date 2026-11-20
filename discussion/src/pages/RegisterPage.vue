<script setup>
	import {ref} from 'vue'
	import api from '../api.js';
	import {Notyf} from 'notyf'

	const notyf = new Notyf();

	const email = ref("");
	const password=ref("");

	async function handleSubmit(){
		try{
			const response = await api.post("/users/register",{
				email : email.value,
				password: password.value
			})

			notyf.success(response.data.message)
		}
		catch(e){
			notyf.error("Registration failed");
		}
	}
</script>
<template>
	<div class="container justify-content-center mx-auto">
		<h1 class="text-center">Register</h1>
		<form @submit.prevent="handleSubmit" class="border mx-auto">
			<div class="col-5 mt-3 mb-3">
				<label>Email</label>
				<input type="text" class="form-control" v-model="email" required/>
			</div>
			
			<div class="mb-3">
				<label>password</label>
				<input type="password" class="form-control" v-model="password" required/>
			</div>
			<button type="submit">Register</button>
		</form>
		
	</div>
</template>