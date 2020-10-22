<template>
	<label class="inline-flex items-center">
	    <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked><span class="ml-2 text-gray-700"><slot></slot></span>
	</label>
</template>

<script>
export default {
  name: 'Input',
  props: {
  	
  },
}
</script>