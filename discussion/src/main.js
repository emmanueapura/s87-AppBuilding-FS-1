import 'bootstrap/dist/css/bootstrap.css';


import { createApp } from 'vue'
import './style.css'
import {createPinia} from 'pinia'
import App from './App.vue'
import "notyf/notyf.min.css";

import Home from './pages/Home.vue'
import RegisterPage from './pages/RegisterPage.vue'
import AddWorkoutPage from './pages/AddWorkoutPage.vue'
import WorkoutPage from './pages/WorkoutPage.vue'
import LoginPage from './pages/LoginPage.vue'


import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes:[{
		path:'/',
		name: 'Home',
		component: Home
	},
		{
		path:'/RegisterPage',
		name: 'RegisterPage',
		component: RegisterPage
	},
	{
		path:'/AddWorkoutPage',
		name: 'AddWorkoutPage',
		component: AddWorkoutPage
	},
	{
		path:'/WorkoutPage',
		name: 'WorkoutPage',
		component: WorkoutPage
	},{
		path:'/LoginPage',
		name: 'LoginPage',
		component: LoginPage
	}]
})
const app = createApp(App);
app.use(createPinia());
app.use(router)
app.mount('#app')
