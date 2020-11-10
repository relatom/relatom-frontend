<template>
	<ValidationObserver v-slot="{ handleSubmit }" ref="observer"> 
		<form @submit.prevent="handleSubmit(onSubmit)" ref="form" >
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
    reset () {
      this.$refs.observer.reset();
    },
    onSubmit () {
      this.$emit('onSubmit');
    }
  }
}
</script>