<template>
	<div class="m-auto px-4 md:p-0 w-full md:w-1/4">
		<h1 class="text-2xl text-gray-900 font-bold mb-6 text-center">Se connecter</h1>
		<div class="bg-white border rounded-2xl p-6">
			
			<tu-form-with-validation v-on:onSubmit="login">
				<tu-input-with-validation 
				type="email"
				label="Email" 
				v-model="form.email" />
				<tu-input-with-validation 
				type="password"
				label="Mot de passe"
				v-model="form.password" />
				<tu-submit-button name="Connexion" icon="lock-closed" :pending="pending"/>
			</tu-form-with-validation>

		</div>
	</div>
</template>

<script>
export default {
	name: 'login',
	layout: 'auth',
	auth: 'gest',
	data () {
		return {
			form: {
				email: null,
				password: null
			},
			pending: false,
			error: {}
		}
	},
  	methods: {
  		login() {
  			this.pending = true;
  			this.error = {};
  			this.$axios.get('/sanctum/csrf-cookie').then(response => {
		    	this.$auth.loginWith('local', { data: this.form }).then(response => {
		    		this.$router.push({path: '/events'});
		    	}).catch(error => {
		    		this.pending = false;
	    			console.log(error);
	  			});
		    });

		    // this.error = err;
		},
	}
}
</script>