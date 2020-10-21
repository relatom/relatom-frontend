<template>
  <main>
  	<sub-header title="Évènements (10)">
  		<template v-slot:actions>
  			<btn>
  				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
  				<span class="ml-1">Nouvel évènement</span>
  			</btn>
  		</template>
  	</sub-header>	
  	<div class="container mt-6 px-4">
  		<div>
  			<h2 class="ml-4 mb-2 font-bold">2 octobre</h2>
  			<div class="rounded-full bg-white p-4">
	  			<div >	
	  				<h2>Start : 2 octobre à 20h</h2>
	  			</div>
	  		</div>
  		</div>
	  	<div class="mt-4">
  			<h2 class="ml-4 mb-2 font-bold">2 octobre</h2>
  			<div>
	  			<div class="rounded-t-3xl bg-white px-4 py-3 border-b">	
	  				<h3>Séance de l'école de pagaie</h3>
	  				<p class="text-gray-600 text-sm">14h30 - 17h00</p>
	  			</div>
	  			<div class="bg-white px-4 py-3 border-b">	
	  				<p>Start : 2 octobre à 20h</p>
	  			</div>
	  			<div class="rounded-b-3xl bg-white px-4 py-3">	
	  				<p>Start : 2 octobre à 20h</p>
	  			</div>
	  		</div>
  		</div>
  		<div class="mt-4">
  			<h2 class="ml-4 mb-2 font-bold">2 octobre</h2>
  			<div>
	  			<div class="rounded-t-3xl bg-white px-4 py-3 border-b">	
	  				<p>Séance de l'école de pagaie</p>
	  				<p class="text-gray-600 text-sm">14h30 - 17h00</p>
	  			</div>
	  			<div class="bg-white px-4 py-3 border-b">	
	  				<p>Start : 2 octobre à 20h</p>
	  			</div>
	  			<div class="rounded-b-3xl bg-white px-4 py-3">	
	  				<p>Start : 2 octobre à 20h</p>
	  			</div>
	  		</div>
  		</div>
  		<div class="mt-4">
  			<h2 class="ml-4 mb-2 font-bold">2 octobre</h2>
  			<div>
	  			<div class="rounded-t-3xl bg-white px-4 py-3 border-b">	
	  				<p>Séance de l'école de pagaie</p>
	  				<p class="text-gray-600 text-sm">14h30 - 17h00</p>
	  			</div>
	  			<div class="bg-white px-4 py-3 border-b">	
	  				<p>Start : 2 octobre à 20h</p>
	  			</div>
	  			<div class="rounded-b-3xl bg-white px-4 py-3">	
	  				<p>Start : 2 octobre à 20h</p>
	  			</div>
	  		</div>
  		</div>
  		<div class="mt-4">
  			<h2 class="ml-4 mb-2 font-bold">2 octobre</h2>
  			<div>
	  			<div class="rounded-t-3xl bg-white px-4 py-3 border-b">	
	  				<p>Séance de l'école de pagaie</p>
	  				<p class="text-gray-600 text-sm">14h30 - 17h00</p>
	  			</div>
	  			<div class="bg-white px-4 py-3 border-b">	
	  				<p>Start : 2 octobre à 20h</p>
	  			</div>
	  			<div class="rounded-b-3xl bg-white px-4 py-3">	
	  				<p>Start : 2 octobre à 20h</p>
	  			</div>
	  		</div>
  		</div>
  		<div class="mb-10">
  			<a href="">Everything after 23 january</a>
  		</div>
  	</div>
    
  </main>
</template>

<script>

import SubHeader from "~/components/layouts/SubHeader"
import Btn from "~/components/ui/Btn"

export default {
	components: { SubHeader, Btn }
}

</script>
