<template>
	<div>
		<sub-header :title="$t('settings.title')" />
		<container>
			<div class="bg-white rounded-2xl border">
				<router-link to="/settings" class="px-6 py-4 w-full block flex pointer">
					<div class="flex-1">
						<h1 class="text-lg font-semibold mb-1 text-gray-900">{{ $auth.user.fullname }}</h1>
						<p class="text-gray-700 text-sm">Modifier mon compte</p>
					</div>
				</router-link>	
			</div>
			<ul class="mt-6">
				<li class="bg-white rounded-2xl border">
					<router-link to="Settings" class="px-6 py-4 w-full block flex">
						<div class="flex-1 flex">
							<span class="ml-2 my-auto text-gray-900">Mes enfants</span>
						</div>
					</router-link>
				</li>
			</ul>
			<ul class="mt-6">
				<li class="bg-white rounded-2xl border">
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