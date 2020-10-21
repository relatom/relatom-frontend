<template>
  <div class="flex-1">
  	<button v-if="isBack" class="inline-flex pl-0 hidden" v-on:click="goBack()">
        <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-left w-6 h-6">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
       	<span class="my-auto">Évènements</span>
   	</button>
  </div>
</template>

<script>
export default {

  name: 'Back',

  data () {
    return {
    	'isBack' : true
    }
  },
  methods : {
  	goBack : function() {
  		
  	}
  }  
}
</script>
