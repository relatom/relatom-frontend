<template>
	<main>
		<sub-header :title="$t('events.title.edit')" />	
	  	<container>
	  		<events-form 
	  			:event="event" 
	  			:submit-name="$t('events.submit.edit')" 
	  			:on-submit="sendData"
	  			:is-pending="pending" />
	  	</container>
	</main>
</template>

<script>
export default {
  	name: 'edit',
  	data () {
		return {
			'pending' : false,
		}
	},
	methods: {
		async sendData(data) {
			this.pending = true;
			console.log(data);
			let vm = this;
			const res = await this.$axios.$put('/events/'+ data.id, data)
			.then(function (response) {
    			vm.$router.push({path: '/events'});
    			vm.pending = false;
  			}); 
		}
	},
 	async asyncData({ params, $axios }) {
	    const res = await $axios.$get('/events/' + params.hashid)
	    const event = await res.data
	    return { event }
	}
}
</script>