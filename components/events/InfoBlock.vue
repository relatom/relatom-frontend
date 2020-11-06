<template>
	<div class="mb-3 flex flex-col ">
		<h3 class="w-24 flex-none text-left mb-1 font-bold text-gray-900">{{ title }}</h3>
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