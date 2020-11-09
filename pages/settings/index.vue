<template>
	<div>
		<sub-header :title="$t('settings.title')" />
		<container>
			<div class="bg-white rounded shadow-xs">
				<router-link to="/settings" class="px-6 py-4 w-full block flex pointer">
					<div class="flex-1">
						<h1 class="text-lg font-semibold mb-1 text-gray-900">Célestin Ballèvre</h1>
						<p class="text-gray-700 text-sm">Modifier mon compte</p>
					</div>
					<svg class="w-6 h-6 my-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
				</router-link>	
			</div>
			<ul class="mt-6">
				<li class="bg-white rounded-t shadow-xs">
					<router-link to="Settings" class="px-6 py-4 w-full block flex">
						<div class="flex-1 flex">
							<svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
							<span class="ml-2 my-auto text-gray-900">Mes enfants</span>
						</div>
						<svg class="w-6 h-6 my-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
					</router-link>
				</li>
			</ul>
			<ul class="mt-6 shadow-xs">
				<li class="bg-white rounded-b">
					<button class="text-red-600 inline-flex px-6 py-4 w-full" v-on:click="logout">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg> 
						<span class="ml-2 my-auto">Se déconnecter</span></button>
				</li>
			</ul>
		</container>
	</div>
</template>

<script>
export default {
  	name: 'index',
	methods: {
	    'logout' : function () {
	    	this.$auth.logout('local');
	    }
	}
}
</script>