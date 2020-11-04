<template>
	<tu-form-with-validation v-on:onSubmit="handleSubmit">
		<tu-input-with-validation 
			type="string"
			:label="$t('events.label.title')"
			:placeholder="$t('events.placeholder.title')"
			name="title"
			v-model="event.title" />
		<tu-checkbox-with-validation 
			:label="$t('events.label.is_all_day')" 
			v-model="event.is_all_day" />
		<tu-date-time-with-validation
			name="starts_at"
			rules="required"
			:label="$t('events.label.starts_at')"
			v-model="event.starts_at"
			:is-time="!event.is_all_day" />
		<tu-date-time-with-validation
			:rules="{ required: true, after_or_equal: event.is_all_day ? { date: '@starts_at' } : false, after: !event.is_all_day ? { date: '@starts_at' } : false }"
			:label="$t('events.label.ends_at')"
			v-model="event.ends_at"
			:is-time="!event.is_all_day" />
		<tu-textarea-with-validation 
			:label="$t('events.label.notes')"
			v-model="event.notes" 
			:placeholder="$t('events.placeholder.notes')" />
		<tu-submit-button
			:pending="isPending"
			:name="submitName" 
			icon="plus" />
	</tu-form-with-validation>
</template>

<script>
import { DateTime } from 'luxon';

export default {
  	name: 'Form',
  	props: {
  		submitName: {
  			type: String,
  			required: true
  		},
  		event: {
  			type: Object,
  			default () {
  				const currentDateTime = DateTime.local();
  				return {
  					'title' : null,
					'is_all_day': false,
					'starts_at': currentDateTime.toSQL(),
					'ends_at': currentDateTime.plus({hours: 1}).toSQL(),
					'notes' : null,
  				}
	    	}
  		},
  		onSubmit: {
  			type: Function
  		},
  		isPending: {
  			type: Boolean,
  			default: false
  		}
  	},
  	methods: {
  		handleSubmit: function(e) {
  			this.onSubmit(this.event);
  		}
  	}
}
</script>