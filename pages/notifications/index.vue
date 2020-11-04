<template>
	<div>
		<sub-header :title="$t('notifications.title')">
			<template v-slot:actions>
	  			<t-button variant="secondary-sm" to="/notifications">Tout marquer comme lu</t-button>
	  		</template>
	  	</sub-header>	
	</div>
</template>

<script>
export default {
  name: 'index',
}
</script>