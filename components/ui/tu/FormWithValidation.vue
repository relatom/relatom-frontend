<template>
	<ValidationObserver v-slot="{ handleSubmit }">
		<form @submit.prevent="handleSubmit(onSubmit)">
			<slot></slot>
		</form>
	</ValidationObserver>
</template>

<script>
import { ValidationObserver } from "vee-validate";

export default {
  name: 'FormWithValidation',
  components : { ValidationObserver },
  methods: {
    onSubmit () {
      this.$emit('onSubmit');
    }
  }
}
</script>