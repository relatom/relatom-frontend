<template>
  <main>
  	<sub-header :title="$t('events.title.index')">
  		<template v-slot:actions>
        <t-button variant="primary-sm" to="/events/add"><icon name="plus" size="sm" class="mr-1" /><span>{{ $t('events.actions.add') }}</span></t-button>
        <t-button variant="secondary-sm">Publier l'agenda</t-button>
        <t-button variant="secondary-sm">Rendre accessible l'agenda</t-button>
        <t-button variant="secondary-sm">Tester une nouvelle fonctionnalités</t-button>
        <t-button variant="secondary-sm">C'est le top les buttons</t-button>
        <t-button variant="secondary-sm">Je ne comprend rien à rien</t-button>
  		</template>
  	</sub-header>	
  	<container>
      <events-day v-for="(items, day) in events" :day="day" :items="items" :key="'day-' + day"></events-day>
  	</container>
  </main>
</template>

<script>

import SubHeader from "~/components/layouts/SubHeader"
import BtnLink from "~/components/ui/BtnLink"

export default {
	components: { SubHeader, BtnLink },
  data() {
    return {
      events: []
    }
  },
  async fetch() {
    this.events = await this.$axios.$get('/events')
  },
}

</script>
