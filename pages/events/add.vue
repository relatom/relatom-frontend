<template>
	<main>
	  	<sub-header :title="$t('events.title.add')" />	
	  	<container>
	  		<events-form
	  			:submit-name="$t('events.submit.add')"
	  			:on-submit="sendData"
	  			:is-pending="pending" />
	  	</container>
  	</main>

</template>

<script>
export default {
  	name: 'add',
  	data () {
		return {
			'pending' : false,
		}
	},
	methods: {
		async sendData(data) {
			this.pending = true;
			let vm = this;
			const res = await this.$axios.$post('/events', data).then(function (response) {
    			vm.$router.push({path: '/events'});
    			vm.pending = false;
  			});
		}
	}
}
</script>