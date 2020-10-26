<template>
  <div class="flex-1">
  	<button v-if="isBack" class="inline-flex pl-0" v-on:click="goBack()">
        <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-left w-6 h-6">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
       	<span class="my-auto">{{ backLabel }}</span>
   	</button>
  </div>
</template>

<script>
export default {

  name: 'Back',
  computed : {
    isBack : function() {
      console.log(this.$route.name);
      return this.$route.name == 'events-add'
        || this.$route.name == 'events-hashid';
    },
    backLabel : function() {
      switch (this.$route.name) {
        case 'events-add':
        case 'events-hashid':
          return 'Évènements';
        break;
      }
    } 
  },
  methods : {
  	goBack : function() {
  		switch (this.$route.name) {
        case 'events-add':
        case 'events-hashid':
          this.$router.push({
            path: '/events'
          });
        break;
      }
  	}
  }  
}
</script>
