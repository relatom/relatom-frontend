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
          <div class="flex justify-between items-center">
            <div>
              <p class="text-gray-900 font-medium">Célestin Ballèvre</p>
            </div>
            <div>
              <p class="text-xs text-white px-3 py-1 bg-blue-500 rounded-2xl">Administrateur</p>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 border-b">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-gray-900 font-medium">Antoine Barbier</p>
            </div>
            <div>
              <p class="text-xs text-white px-3 py-1 bg-green-500 rounded-2xl">Organisateur</p>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 border-b">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-sm text-gray-700">Jean-mickael Busnel, Le deuxième parent si deux compte</p>
              <p class="text-gray-900 font-medium"><span class="text-gray-400 mr-1 font-normal">—</span>Eliaz</p>      
            </div>
            <div>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 border-b">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-gray-900 font-medium">Maiann Ferron</p>      
            </div>
            <div>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 border-b">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-gray-900 font-medium">Solenn Ferron</p>      
              <p class="text-gray-900 font-medium"><span class="text-gray-400 mr-1 font-normal">—</span>Morvan</p>      
            </div>
            <div>
            </div>
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
