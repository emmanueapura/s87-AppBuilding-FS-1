
<template>
	<nav class= "navbar bg-secondary">
		<div class="container-fluid">
			<router-link :to="{name:'Home'}">Home</router-link>

				<div id="navbarNav">
					<ul class="navbar-nav d-flex flex-row gap-3">
						<router-link :to="{name:'AddWorkoutPage'}" class="nav-link">AddWorkOut</router-link>
						<router-link :to="{name:'WorkoutPage'}" class="nav-link">Workout</router-link>
						<router-link :to="{name:'RegisterPage'}" class="nav-link">Register</router-link>
						<router-link :to="{name:'LoginPage'}" class="nav-link">Log In</router-link>
						<!-- <router-link class="nav-link">Log Out</router-link> -->
					</ul>	
				</div>
						
		</div>
	</nav>
</template>