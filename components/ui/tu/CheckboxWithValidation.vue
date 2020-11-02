<template>
	<ValidationProvider
          :vid="vid" 
          :name="$attrs.name" 
          :rules="rules" 
          v-slot="{ valid, errors }">
        <t-input-group 
        	:feedback="errors[0]">
        	<t-checkbox 
		  		wrapped 
		  		:label="$t('events.label.is_all_day')" 
		  		v-model="innerValue" />
		</t-input-group>
    </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  name: 'CheckboxWithValidation',
  components : { 
  	ValidationProvider 
  },
  props: {
    vid: {
      type: String
    },
    rules: {
      type: [Object, String],
      default: ""
    },
    // must be included in props
    value: {
      type: null
    }
  },
  data: () => ({
    innerValue: ""
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    }
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  }
}
</script>

<style lang="css" scoped>
</style>