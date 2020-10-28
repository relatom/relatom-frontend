<template>
	<div class="bg-white px-4 py-3 border-l border-r border-b cursor-pointer" v-bind:class="{ 'border-t rounded-t-2xl': first, 'rounded-b-2xl': last }" v-on:click="onClick">	
		<h3 class="font-bold text-lg"><nuxt-link :to="'/events/'+item.id">{{ item.title }}</nuxt-link></h3>
		<p class="text-gray-600 text-sm">{{ when }}</p>
	</div>
</template>

<script>

import { DateTime } from 'luxon';

export default {
  name: 'DayItem',
  props: ['item', 'first', 'last'],
  computed: {
    'when': function() {
      let start = DateTime.fromSQL(this.item.starts_at);
      let end = DateTime.fromSQL(this.item.ends_at);
      const startDate = start.toISODate();
      const endDate = end.toISODate();
      
      if(this.item.is_all_day && startDate == endDate) {
        return start.toFormat('dd LLL') ;
      } else if(this.item.is_all_day && startDate != endDate) {
        return start.toFormat('dd LLL') + ' - ' + end.toFormat('dd LLL');
      } else if(!this.item.is_all_day && startDate != endDate) {
        return start.toLocaleString(DateTime.TIME_SIMPLE) + ' - ' + end.toFormat('dd LLL') + ' ' + start.toLocaleString(DateTime.TIME_SIMPLE);
      } 

      return start.toLocaleString(DateTime.TIME_SIMPLE) + ' - ' + end.toLocaleString(DateTime.TIME_SIMPLE);
    }
  },
  methods: {
  	onClick: function() {
  		this.$router.push({
        path: '/events/' + this.item.id
      })
  	} 
  }
}
</script>