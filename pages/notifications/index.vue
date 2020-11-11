<template>
	<main>
		<sub-header :title="$t('notifications.title')">
			<template v-slot:actions>
	  			<t-button variant="secondary-sm" to="/notifications">Tout marquer comme lu</t-button>
	  		</template>
	  	</sub-header>	
	  	<container>
	  		<div class="text-center mt-32">
	  			<h2 class="mb-1 text-gray-900 text-ls font-semibold">Aucun notification pour le moment</h2>
	  			<p class="mb-3 text-gray-600">Lorsque vous recevrez des notifications, elles apparaissent ici.</p>
	  			<t-button variant="primary">Actualiser</t-button>
	  		</div>
	  	</container>
	</main>
</template>

<script>
export default {
  name: 'index',
}
</script>