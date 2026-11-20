<script setup>
	import {ref} from 'vue'
	import api from '../api.js';
	import {Notyf} from 'notyf'

	const notyf = new Notyf();

	const name = ref("");
	const duration=ref("");

	async function handleSubmit(){
		try{
			const response = await api.post("/workouts/addWorkout",{
				name : name.value,
				duration: duration.value
			})

			notyf.success(response.data.message)
		}
		catch(e){
			notyf.error("Adding failed");
		}
	}
</script>
<template>
	<div class="justify-content-center">
		<form @submit.prevent="handleSubmit">
			<div class="col-5 mt-3 mb-3">
				<label>Name</label>
				<input type="text" class="form-control" v-model="name" required/>
			</div>
			
			<div class="mb-3">
				<label>Duration</label>
				<input type="text" class="form-control" v-model="duration" required/>
			</div>
			<button type="submit">Submit</button>
		</form>
	</div>
</template>