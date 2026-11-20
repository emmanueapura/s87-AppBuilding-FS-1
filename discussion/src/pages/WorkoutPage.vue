<script setup>
	import {reactive, onMounted} from 'vue'
	import api from '../api.js';
	import { Notyf } from 'notyf';
	import {useGlobalStore} from "../stores/global.js"

	const notyf=new Notyf();
	const {user} = useGlobalStore();

	const workouts = reactive({
		data: []
	});

	async function getWorkout(){
		try{
			const {data}= await api.get("/workouts/getMyWorkouts");
			workouts.data = data.workouts
			console.log(data);
			notyf.success("Retrieved successfully");
		}
		catch (e){
			notyf.error("Getting workouts failed")
		}
	}

	onMounted(()=>{
		getWorkout();
	})

</script>
<template>
	<div>
		<table class="border">
			<thead>
				<tr>
					<th>Name</th>
					<th>Duration</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="workout in workouts.data" :key="workout._id">
					<td>{{ workout.name }}</td>
					<td>{{ workout.duration }}</td>
				</tr>
				
			</tbody>
		</table>


	</div>
</template>