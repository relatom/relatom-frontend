<template>
	<t-button 
	  	type="submit" 
	  	variant="primary" :disabled="pending">
      <icon :name="iconValue" size="sm" class="mr-2" />
      {{ labelValue }}
	</t-button>
</template>

<script>
export default {
  name: 'SubmitButton',
  computed: {
    iconValue : function() {
      return this.pending ? this.pendingIcon : this.icon;
    },
    labelValue : function() {
      return this.pending ? this.pendingLabel + '...' : this.name;
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String
    },
    pending: {
      type: Boolean,
      default: false
    },
    pendingLabel: {
    	type: String,
    	default: "En attente"
    },
    pendingIcon: {
      type: String,
      default: 'clock'
    }
  },
}
</script>