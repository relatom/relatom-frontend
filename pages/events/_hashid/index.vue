<template>
	<div>
		<sub-header :title="event.title">
			<template v-slot:actions>
				<t-button variant="primary-sm" :to="{path:'/events/' + $route.params.hashid + '/edit'}">Modifier</t-button>
	  			<t-button variant="delete-sm" class="ml-3">Annuler</t-button>
	  		</template>
	  	</sub-header>
		<container>
			<div class="mb-4 bg-white rounded-2xl p-4 border">
				<events-info-block title="Quand">
					<p>{{ when }}</p>
				</events-info-block>
				<events-info-block title="Où">
					<p>Etang du boulet (Feins)</p>
				</events-info-block>
				<events-info-block title="Organisateur(s)">
					<p>Sybille Blat, Célestin Ballèvre</p>
				</events-info-block>
				<events-info-block title="Notes">
					<p>{{ event.notes }}</p>
				</events-info-block>
				<events-info-block title="Participants">
					<p>Sybille B., Antoine B., Célestin B., Salomé G.</p>
				</events-info-block>
			</div>			
			<div class="mb-4">
				<p class="font-bold ml-3 mb-2">Allez-vous participez ?</p>
				<div class="bg-white border rounded-2xl p-4">
					<div class="flex justify-between mb-1">
						<p>Vous (Solenn)</p>
						<t-toggle checked />
					</div>
					<div class="flex justify-between mb-1">
						<p>Maiann</p>
						<t-toggle />
					</div>
					<div class="flex justify-between">
						<p>Morvan</p>
						<t-toggle />
					</div>
				</div>
			</div>
			<div class="mb-4">
				<p class="font-bold ml-3 mb-2">Discussions</p>
				<div class="mb-3 bg-white border rounded-2xl px-4 py-3">
					<p class="text-gray-900 text-sm font-semibold">Célestin Ballèvre</p>
					<p class="text-gray-700">L'heure du départ n'est t'il pas déplaçable ?</p>
				</div>
				<div class="mb-2 bg-white border rounded-2xl px-4 py-3">
					<p class="text-gray-900 text-sm font-semibold">Célestin Ballèvre</p>
					<p class="text-gray-700">L'heure du départ n'est t'il pas déplaçable ?</p>
				</div>
				<div class="mb-2 bg-white border rounded-2xl px-4 py-3">
					<p class="text-gray-900 text-sm font-semibold">Célestin Ballèvre</p>
					<p class="text-gray-700">L'heure du départ n'est t'il pas déplaçable ?</p>
				</div>
				<div class="mb-2 bg-white border rounded-2xl px-4 py-3">
					<p class="text-gray-900 text-sm font-semibold">Célestin Ballèvre</p>
					<p class="text-gray-700">L'heure du départ n'est t'il pas déplaçable ?</p>
				</div>
				<div class="mb-2 bg-white border rounded-2xl px-4 py-3">
					<tu-input-with-validation 
						class="mb-0"
						placeholder="Add a comment" />
				</div>
			</div>
		</container>
	</div>
</template>

<script>

import { DateTime } from 'luxon';
import { mapState } from 'vuex';

export default {

	computed: {
  		'when': function() {
	      let start = DateTime.fromSQL(this.event.starts_at);
	      let end = DateTime.fromSQL(this.event.ends_at);
	      const startDate = start.toISODate();
	      const endDate = end.toISODate();
	      
	      if(this.event.is_all_day && startDate == endDate) {
	        return start.toFormat('dd LLL') ;
	      } else if(this.event.is_all_day && startDate != endDate) {
	        return start.toFormat('dd LLL') + ' - ' + end.toFormat('dd LLL');
	      } else if(!this.event.is_all_day && startDate != endDate) {
	        return start.toLocaleString(DateTime.TIME_SIMPLE) + ' - ' + end.toFormat('dd LLL') + ' ' + start.toLocaleString(DateTime.TIME_SIMPLE);
	      } 

	      return start.toLocaleString(DateTime.TIME_SIMPLE) + ' - ' + end.toLocaleString(DateTime.TIME_SIMPLE);
	    }
  	},
    async asyncData({ params, $axios }) {
	    const res = await $axios.$get('/events/' + params.hashid)
	    const event = await res.data
	    return { event }
	 }
}
</script>