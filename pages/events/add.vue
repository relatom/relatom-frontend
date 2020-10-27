<template>
	<main>
	  	<sub-header title="Nouvel évènement" />	
	  	<container>
	  		<form
	  			@submit="checkForm"
	  			method="post">
	  			<t-input-group
	  				label="Titre de l'évènement">
	  				<t-input type="text" v-model="title" placeholder="Ajouter un titre"/>
	  			</t-input-group>

	  			<t-input-group>
	  				<t-checkbox wrapped label="Toute la journée ?" v-model="is_all_day" />
	  			</t-input-group label="Débute">

	  			<t-input-group label="Débute">
		  			<t-input type="date" v-model="starts_at_date" />
		  			<t-input type="time" v-model="starts_at_time" v-if="!is_all_day" />
	  			</t-input-group>

	  			<t-input-group label="Prend fin">
		  			<t-input type="date" v-model="ends_at_date" />
		  			<t-input type="time" v-model="ends_at_time" v-if="!is_all_day" />
	  			</t-input-group>

	  			<t-input-group label="Notes (facultatif)">
	  				<t-textarea v-model="notes" placeholder="Remarque sur l'organisation..." />
	  			</t-input-group>

	  			<t-button type="submit" variant="full">Enregistrer</t-button>
	  		</form>
	  	</container>
  	</main>
</template>

<script>

import { DateTime } from 'luxon';

export default {
  	name: 'add',
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