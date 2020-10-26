<template>
	<div class="mb-2">
		<h2 class="ml-4 mb-2 font-bold">{{ day | luxonLocale('date_huge') }}</h2>
		<events-day-item v-for="(item, index) in items" :item="item" :first="index == 0" :last="index == (items.length-1)" :key="'key-'+item.id" />
	</div>
</template>

<script>
export default {
  name: 'Day',
  props: ['day','items'],
}
</script>