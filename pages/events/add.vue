<template>
	<main>
	  	<sub-header :title="$t('events.title.add')" />	
	  	<container>
	  		<ValidationObserver v-slot="{ invalid }">
		  		<form
		  			@submit="checkForm"
		  			method="post">
		  			<t-input-with-validation 
		  				rules="required"
		  				type="string"
		  				:label="$t('events.label.title')"
		  				:placeholder="$t('events.placeholder.title')"
		  				name="title"
		  				v-model="title"
		  				description="We'll never share your email with anyone else"
		  			/>
		  			<t-input-group>
		  				<t-checkbox 
		  				wrapped 
		  				:label="$t('events.label.is_all_day')" 
		  				v-model="is_all_day" />
		  			</t-input-group>
		  			<t-input-group 
		  				:label="$t('events.label.starts_at')">
			  			<t-input 
			  				type="date" 
			  				v-model="starts_at_date" />
			  			<t-input 
			  				type="time" 
			  				v-model="starts_at_time" 
			  				v-if="!is_all_day" />
		  			</t-input-group>
		  			<t-input-group 
		  				:label="$t('events.label.ends_at')">
			  			<t-input 
			  				type="date" 
			  				v-model="ends_at_date" />
			  			<t-input 
			  				type="time" 
			  				v-model="ends_at_time" 
			  				v-if="!is_all_day" />
		  			</t-input-group>
		  			<t-input-group 
		  				:label="$t('events.label.notes')" >
		  				<t-textarea 
		  					v-model="notes" 
		  					:placeholder="$t('events.placeholder.notes')" />
		  			</t-input-group>
		  			<t-button 
		  				type="submit" 
		  				variant="full">{{ $t('events.submit.add') }}</t-button>
		  		</form>
	  		</ValidationObserver>
	  	</container>
  	</main>
</template>

<script>

import { DateTime } from 'luxon';
import { ValidationObserver } from "vee-validate";

export default {
  	name: 'add',
  	components : { ValidationObserver },
	data () {
		const currentDateTime =  DateTime.local();
		return {
			'title' : null,
			'is_all_day': false,
			'starts_at_date':  currentDateTime.toISODate(),
			'starts_at_time': currentDateTime.toFormat('T'),
			'ends_at_date': currentDateTime.toISODate(),
			'ends_at_time': currentDateTime.plus({hours: 1}).toFormat('T'),
			'notes' : null
		}
	},
	methods: {
		checkForm: function(e) {
			console.log(this.title);
			this.sendData();
			e.preventDefault();
		},
		async sendData() {
			const res = await this.$http.post('http://api.ckcfeins.relatom.test/events', 
				{ 
					title: this.title,
					is_all_day: this.is_all_day,
					starts_at: this.starts_at_date + ' ' + this.starts_at_time, 
					ends_at: this.ends_at_date + ' ' + this.ends_at_time, 
					notes: this.notes
				}
			);
		}
	}

}
</script>