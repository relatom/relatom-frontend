<template>
	<div class="mb-2 flex flex-col md:flex-row">
		<h3 class="w-24 flex-none text-left md:text-right mb-2 md:mb-0 font-bold md:mr-4">{{ title }}</h3>
		<slot></slot>
	</div>
</template>

<script>
export default {

  name: 'InfoBlock',
  props: ['title'],
}
</script>

<style lang="css" scoped>
</style>