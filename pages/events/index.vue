<template>
  <main>
  	<sub-header title="Évènements (10)">
  		<template v-slot:actions>
  			<btn-link to="/events/add">
  				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
  				<span class="ml-1">Nouvel évènement</span>
  			</btn-link>
  		</template>
  	</sub-header>	
  	<div class="container mt-6 px-4">
  		<div>
  			<h2 class="ml-4 mb-2 font-bold">2 octobre</h2>
  			<div class="rounded-3xl bg-white px-4 py-3 border">
	  			<h3>Séance de l'école de pagaie <span class="ml-1 px-1 py-1 rounded-full bg-indigo-300 text-white text-xs">10</span></h3>
	  			<p class="text-gray-600 text-sm">14h30 - 15h30</p>
	  		</div>
  		</div>
	  	<div class="mt-4">
  			<h2 class="ml-4 mb-2 font-bold">10 octobre</h2>
  			<div class="rounded-t-3xl bg-white px-4 py-3 border-t border-l border-r border-b">	
  				<h3>Séance de l'école de pagaie</h3>
  				<p class="text-gray-600 text-sm">14h30 - 15h30</p>
  			</div>
  			<div class="bg-white px-4 py-3 border-l border-r border-b">	
  				<h3>Séance de l'école de sport <span class="ml-1 px-1 py-1 rounded-full bg-indigo-300 text-white text-xs">22</span></h3>
  				<p class="text-gray-600 text-sm">15h30 - 17h30</p>
  			</div>
  			<div class="rounded-b-3xl bg-white px-4 py-3 border-l border-r border-b">	
  				<h3>Assemblée générale du club</h3>
  				<p class="text-gray-600 text-sm">18h30 - 19h30</p>
  			</div>
  		</div>
  		<div class="mt-4">
  			<h2 class="ml-4 mb-2 font-bold">15 octobre</h2>
  			<div class="rounded-t-3xl bg-white px-4 py-3 border-t border-l border-r border-b">	
  				<h3>Séance de l'école de pagaie <span class="ml-1 px-1 py-1 rounded-full bg-indigo-300 text-white text-xs">3</span></h3>
  				<p class="text-gray-600 text-sm">14h30 - 15h30</p>
  			</div>
  			<div class="bg-white px-4 py-3 border-l border-r border-b rounded-b-3xl">	
  				<h3>Séance de l'école de sport <span class="ml-1 px-1 py-1 rounded-full bg-indigo-300 text-white text-xs">6</span></h3>
  				<p class="text-gray-600 text-sm">15h30 - 17h30</p>
  			</div>
  		</div>
  		<div class="mt-4">
  			<h2 class="ml-4 mb-2 font-bold">19 octobre</h2>
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
import BtnLink from "~/components/ui/BtnLink"

export default {
	components: { SubHeader, BtnLink }
}

</script>
