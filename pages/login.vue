<template>
	<div class="m-auto w-1/6">
		<div class="bg-white border rounded-2xl p-6">
			<h1 class="text-xl text-gray-900 mb-4">Se connecter</h1>
			<tu-form-with-validation v-on:onSubmit="login">
				<tu-input-with-validation 
				type="email"
				label="Email" 
				v-model="form.email" />
				<tu-input-with-validation 
				type="password"
				label="Mot de passe"
				v-model="form.password" />
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
      
  	},
  	methods: {
  		async login() {
  			this.error = {};
  			try {
  				await this.$axios.$get('/sanctum/csrf-cookie');
	          	await this.$auth.loginWith('local', { data: this.form });

	          	// Redirect user after login
	          	his.$router.push({
	          		path: '/events',
	          	});
	      	} catch (err) {
	      		this.error = err;
		        // do something with error
		    }
		},
	}
}
</script>