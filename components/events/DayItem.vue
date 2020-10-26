<template>
	<div class="bg-white px-4 py-3 border-l border-r border-b cursor-pointer" v-bind:class="{ 'border-t rounded-t-2xl': first, 'rounded-b-2xl': last }" v-on:click="onClick">	
		<h3><nuxt-link :to="'/events/'+item.id">{{ item.title }}</nuxt-link></h3>
		<p class="text-gray-600 text-sm">{{ item.starts_at | luxon:format('HH:mm', { serverFormat: 'sql' }) }} - {{ item.ends_at | luxon:format('HH:mm', { serverFormat: 'sql' })}}</p>
	</div>
</template>

<script>
export default {
  name: 'DayItem',
  props: ['item', 'first', 'last'],
  methods: {
  	onClick: function() {
  		this.$router.push({
        path: '/events/' + this.item.id
      })
  	} 
  }
}
</script>