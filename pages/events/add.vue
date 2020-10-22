<template>
	<main>
	  	<sub-header title="Nouvel évènement">
	  	</sub-header>	
	  	<div class="container mt-6 px-4">
	  		<form>
	  			<form-group label="Titre de l'évènement">
	  				<form-input type="text" placeholder="Ajouter un titre" />
	  			</form-group>
	  			<form-group>
	  				<form-checkbox>Toute la journée ?</form-checkbox>
	  			</form-group>
	  			<form-legend label="Débute">
	  				<div class="flex">
	  					<input type="date">
	  					<input type="time" class="ml-4 w-20">
	  				</div>
	  			</form-legend>
	  			<form-legend label="Prend fin">
	  				<div class="flex">
	  					<input type="date">
	  					<input type="time" class="ml-4 w-20">
	  				</div>
	  			</form-legend>
	  			<form-group label="Organisateur">
	  				<form-input type="text" />
	  			</form-group>
	  			<form-group label="Avec (facultatif)">
	  				<form-input type="text" />
	  			</form-group>
	  			<form-group label="Notes (facultatif)">
	  				<textarea class="block w-full ">
	  					
	  				</textarea>
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
    }
  }
}
</script>