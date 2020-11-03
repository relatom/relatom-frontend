<template>
	<main>
	  	<sub-header :title="$t('events.title.add')" />	
	  	<container>
	  		<tu-form-with-validation v-on:onSubmit="onSubmit">
	  			<tu-input-with-validation 
	  				type="string"
	  				:label="$t('events.label.title')"
	  				:placeholder="$t('events.placeholder.title')"
	  				name="title"
	  				v-model="title" />
	  			<tu-checkbox-with-validation 
	  				:label="$t('events.label.is_all_day')" 
	  				v-model="is_all_day" />
	  			<tu-date-time-with-validation
	  				name="starts_at"
	  				rules="required"
	  				:label="$t('events.label.starts_at')"
	  				v-model="starts_at"
	  				:is-time="!is_all_day" />
	  			<tu-date-time-with-validation
	  				:rules="{ required: true, after_or_equal: is_all_day ? { date: '@starts_at' } : false, after: !is_all_day ? { date: '@starts_at' } : false }"
	  				:label="$t('events.label.ends_at')"
	  				v-model="ends_at"
	  				:is-time="!is_all_day" />
	  			<tu-textarea-with-validation 
	  				:label="$t('events.label.notes')"
	  				v-model="notes" 
	  				:placeholder="$t('events.placeholder.notes')" />
	  			<tu-submit-button 
	  				:pending="submit.pending" 
	  				:name="$t('events.submit.add')" 
	  				icon="plus" />
	  		</tu-form-with-validation>
	  		
	  	</container>
  	</main>

</template>

<script>

import { DateTime } from 'luxon';

export default {
  	name: 'add',
  	data () {
  		const currentDateTime = DateTime.local();
		return {
			'title' : null,
			'is_all_day': false,
			'starts_at':  currentDateTime.toSQL(),
			'ends_at': currentDateTime.plus({hours: 1}).toSQL(),
			'notes' : null,
			'submit' : {
				'pending' : false,
			}
		}
	},
	methods: {
		onSubmit: function(e) {
			this.sendData(); 
		},
		async sendData() {
			this.submit.pending = true;
			let vm = this;
			const res = await this.$axios.$post('/events',
				{ 
					title: this.title,
					is_all_day: this.is_all_day,
					starts_at: this.starts_at, 
					ends_at: this.ends_at, 
					notes: this.notes
				}
			).then(function (response) {
    			vm.$router.push({path: '/events'});
    			vm.submit.pending = false;
  			});
		}
	}

}
</script>