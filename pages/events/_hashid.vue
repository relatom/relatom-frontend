<template>
	<div>
		<sub-header :title="event.title">
			<template v-slot:actions>
				<btn-link to="/events/add">
	  				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
	  				<span class="ml-1">Modifier</span>
	  			</btn-link>
	  			<btn-link to="/events" class="ml-4">
	  				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
	  				<span class="ml-1">Supprimer</span>
	  			</btn-link>
	  		</template>
	  	</sub-header>
		<container>
			<div class="mb-4 bg-white rounded-2xl p-4 border">
				<events-info-block title="Quand">
					<p>{{ when }}</p>
				</events-info-block>
				<events-info-block title="Notes">
					<p>{{ event.notes }}</p>
				</events-info-block>
			</div>			
			<div class="mb-4">
				<p class="font-bold ml-2 mb-2">Allez-vous participez ?</p>
				<div class="bg-white border rounded-2xl p-4">
					<div class="flex justify-between">
						<p>Vous (Solenn)</p>
						<p>Oui - <span class="line-through">Non</span></p>
					</div>
					<div class="flex justify-between">
						<p>Maiann</p>
						<p>Oui - <span class="line-through">Non</span></p>
					</div>
					<div class="flex justify-between">
						<p>Morvan</p>
						<p>Oui - <span class="line-through">Non</span></p>
					</div>
				</div>
			</div>
			<div class="mb-4">
				<p class="font-bold ml-2 mb-2">Discussions</p>

				<div class="mb-2">
					<p class="text-gray-700 text-sm ml-2 mb-1">Célestin Ballèvre</p>
					<p class="inline-block bg-white border rounded-2xl px-3 py-1">L'heure du départ n'est t'il pas déplaçable ?</p>
				</div>
				<div class="mb-2">
					<p class="text-gray-700 text-sm ml-2 mb-1">Antoine Barbier</p>
					<p class="inline-block bg-white border rounded-2xl px-3 py-1">Non on doit y être avant la marée haut dsl</p>
				</div>
			</div>
			
		</container>
		
		
	</div>
</template>

<script>

import { DateTime } from 'luxon';

export default {
	computed: {
  		when: function() {
  			console.log(this.event.starts_at);
  			/* const startDate = ;
  			const endDate = ;  
  			if(event.data.is_all_day) {

  			} else {
  				if((date) event.data.starts_at == (date) event.data.ends_at) {

  				} else {

  				}
  			} */
  			return 'hello';
  		}
  	},
    async asyncData({ params, $http }) {
	    const res = await $http.$get('http://localhost/events/' + params.hashid)
	    const event = await res.data
	    return { event }
	 }
}
</script>

