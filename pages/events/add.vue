<template>
	<main>
	  	<sub-header title="Nouvel évènement">
	  	</sub-header>	
	  	<div class="container mt-6 px-4">
	  		<form>
	  			<form-group label="Titre de l'évènement">
	  				<form-input type="text" placeholder="Ajouter un titre" v-model="title"/>
	  			</form-group>
	  			<form-group>
	  				<form-input-checkbox v-model="is_all_day">Toute la journée ?</form-input-checkbox>
	  			</form-group>
	  			<form-legend label="Débute">
	  				<form-input-datetime v-model="starts_at" />
	  			</form-legend>
	  			<form-legend label="Prend fin">
	  				<form-input-datetime v-model="ends_at" />
	  			</form-legend>
	  			<form-group label="Organisateur">
	  				<form-input type="text" />
	  			</form-group>
	  			<form-group label="Avec (facultatif)">
	  				<form-input type="text" />
	  			</form-group>
	  			<form-group label="Notes (facultatif)">
	  				<textarea class="block w-full " />
	  			</form-group>
	  			<button class="fixed bottom-0 left-0 right-0 mb-20 w-full bg-indigo-600 py-3 text-white">Enregistrer</button>
	  		</form>
	  	</div>
  	</main>
</template>

<script>
export default {

  name: 'add',
  transition: 'slide-left',
  data () {
    return {
    	'title' : null,
    	'is_all_day': false,
    	'starts_at': new Date(),
    	'ends_at': new Date(),
    	'notes' : null
    }
  }
}
</script>