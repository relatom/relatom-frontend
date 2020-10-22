<template>
	<legend>
		<label class="pb-2">{{ label }}</label>
		<slot></slot>
	</legend>
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
