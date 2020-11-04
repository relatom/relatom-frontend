<template>
	<main>
		<sub-header :title="$t('members.title')">
  		<template v-slot:actions>
  			 <t-button variant="primary-sm" to="/members"><icon name="plus" size="sm" class="mr-1" /><span>Inviter un membre</span></t-button>
  		</template>
  	</sub-header>	
	</main>
</template>

<script>
export default {

  name: 'index',

  data () {
    return {

    }
  }
}
</script>
