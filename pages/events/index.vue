<template>
  <main>
  	<sub-header :title="'Évènements (' + events.metadata.total + ')'">
  		<template v-slot:actions>
  			<btn-link to="/events/add">
  				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
  				<span class="ml-1">Nouvel évènement</span>
  			</btn-link>
  		</template>
  	</sub-header>	
  	<container>
      <events-day v-for="(items, day) in events.data" :day="day" :items="items" :key="'day-' + day"></events-day>
      <t-button>Show everything up to {{ events.metadata.next_date }}</t-button>
  	</container>
  </main>
</template>

<script>

import SubHeader from "~/components/layouts/SubHeader"
import BtnLink from "~/components/ui/BtnLink"

export default {
	components: { SubHeader, BtnLink },
  async asyncData({ params, $http }) {
    const events = await $http.$get(`http://api.ckcfeins.relatom.test/events`)
    return { events }
  }
}

</script>
