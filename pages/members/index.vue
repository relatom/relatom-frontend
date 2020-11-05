<template>
	<main>
		<sub-header :title="$t('members.title')">
  		<template v-slot:actions>
  			 <t-button variant="primary-sm" to="/members"><icon name="plus" size="sm" class="mr-1" /><span>Inviter un membre</span></t-button>
  		</template>
  	</sub-header>	
    <container>
      <div class="bg-white border rounded-2xl flex flex-col">
        <div class="px-4 py-3 border-b">
          <div> 
            <p>Célestin Ballèvre</p>
          </div>
        </div>
        <div class="px-4 py-3 border-b">
          <div> 
            <p>Antoine Barbier</p>
          </div>
        </div>
        <div class="px-4 py-3 border-b">
          <div> 
            <p>Jean-mickael Busnel</p>
            <p>Eliaz</p>
          </div>
        </div>
        <div class="px-4 py-3 border-b">
          <div> 
            <p>Jean philipe Choquer</p>
            <p>Noan</p>
          </div>
        </div>
        <div class="px-4 py-3 border-b">
          <div> 
            <p>Maiann Ferron</p>
          </div>
        </div>
        <div class="px-4 py-3 border-b">
          <div> 
            <p>Solenn Ferron</p>
            <p>Morvan</p>
          </div>
        </div>
      </div>
    </container>
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
