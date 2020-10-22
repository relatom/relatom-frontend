<template>
	<input :type="type" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</template>

<script>
export default {
  name: 'Input',
  props: {
  	type : {
  		type: String,
  		default: function () {
        	return 'text'
      	}
  	}, 
  },
}

/* 

<div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>

*/
</script>