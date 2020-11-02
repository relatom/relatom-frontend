<template>
	<ValidationProvider ref="datetime"
		:vid="vid" 
    :name="$attrs.name" 
    :rules="rules + '|date'" 
    :detectInput="false"
    v-slot="{ valid, errors }"> 
		<t-input-group 
		  :label="$attrs.label"
      :description="$attrs.description"
      :feedback="errors[0]">
  		<t-input 
  			type="date" 
  			v-model="innerDate" />
  		<t-input 
  			type="time" 
  			v-model="innerTime" v-if="isTime"/>
		</t-input-group>
    {{ innerValue }}
	</ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { DateTime } from 'luxon';

export default {
  name: 'DateTimeWithValidation',
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
    },
    isTime: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
  	innerDate: "",
  	innerTime: ""
  }),
  computed: {
    innerValue() {
      return this.innerDate + ' ' + this.innerTime;
    }
  },
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$refs['datetime'].validate(newVal);
      this.$emit("input", newVal);
    },
    // Handles external model changes only in SQL mode.
    value(newVal) {
      const newDate = DateTime.fromSQL(newVal);
      this.innerDate = newDate.toISODate();
      this.innerTime = newDate.toFormat("HH:mm");
    }
  },
  created() {
    if (this.value) {
      const newDate = DateTime.fromSQL(this.value);
      this.innerDate = newDate.toISODate();
      this.innerTime = newDate.toFormat("HH:mm");
    } 
  }
}
</script>