<template>
	<div class="m-auto w-1/6">
		<div class="bg-white border rounded-2xl p-6">
			<h1 class="text-xl text-gray-900 mb-4">Se connecter</h1>
			<tu-form-with-validation v-on:onSubmit="login">
				<tu-input-with-validation 
				type="email"
				label="Email" />
				<tu-input-with-validation 
				type="password"
				label="Mot de passe"/>
				<tu-submit-button name="Connexion" />
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
			error: {}
		}
	},
	mounted() {
      // Before loading login page, obtain csrf cookie from the server.
      this.$axios.$get('/sanctum/csrf-cookie');
  	},
  	methods: {
  		async login() {
  			this.error = {};
  			try {

	          	// Pass form data to `loginWith` function
	          	await this.$auth.loginWith('local', { data: this.form });

	          	// Redirect user after login
	          	this.$router.push({
	          		path: '/',
	          	});
	      	} catch (err) {
	      		this.error = err;
		        // do something with error
		    }
		},
	}
}
</script>