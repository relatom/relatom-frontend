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
	  				rules="required"
	  				:label="$t('events.label.starts_at')"
	  				v-model="starts_at"
	  				:is-time="!is_all_day" />
	  			<tu-date-time-with-validation
	  				rules="required"
	  				:label="$t('events.label.ends_at')"
	  				v-model="ends_at"

	  				:is-time="!is_all_day" />
	  			<tu-textarea-with-validation 
	  				:label="$t('events.label.notes')"
	  				v-model="notes" 
	  				:placeholder="$t('events.placeholder.notes')" />
	  			<t-button 
	  				type="submit" 
	  				variant="full">{{ $t('events.submit.add') }}</t-button>
	  			
	  		</tu-form-with-validation>
	  	</container>
	  	<t-button v-on:click="onClick">Test</t-button>
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
			'notes' : null
		}
	},
	methods: {
		onSubmit: function(e) {
			this.sendData(); 
		},
		onClick: function(e) {
			const currentDateTime =  DateTime.local();
			this.starts_at = currentDateTime.toSQL();
			console.log(this.starts_at);
		},
		async sendData() {
			const res = await this.$http.post('http://localhost/events', 
				{ 
					title: this.title,
					is_all_day: this.is_all_day,
					starts_at: this.starts_at, 
					ends_at: this.ends_at, 
					notes: this.notes
				}
			);
		}
	}

}
</script>