<template>
	<nuxt-link :to="to" v-slot="{ href, route, navigate, isActive, isExactActive }">
		<a 
			:href="href" 
			@click="navigate" 
       		:class="[
       			isActive ? activeClass : notActiveClass, 
       			isExactActive ? exactActiveClass : notExactActiveClass]">
            	<slot></slot>
        	</a>
		</nuxt-link>
</template>

<script>
export default {
  name: 'TailwindLink',
  props: {
  	to : {
  		type: String,
      	required: true
  	},
  	activeClass : {
  		type: String,
  		default: function () {
        	return ''
      	}
  	}, 
  	notActiveClass : {
  		type: String,
  		default: function () {
        	return ''
      	}
  	}, 
  	exactActiveClass: {
  		type: String,
  		default: function () {
        	return ''
      	}
  	},  
  	notExactActiveClass: {
  		type: String,
  		default: function () {
        	return ''
      	}
  	}, 
  },
}
</script>