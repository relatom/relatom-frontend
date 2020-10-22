<template>
	<div class="mb-4">
		<label class="mb-1 block">{{ label }}</label>
		<slot></slot>
	</div>
</template>

<script>
export default {

  name: 'Group',
  props: ['label'],
   computed: {
    hasLabel() {
      return !!this.label
    }
  }
}
</script>
