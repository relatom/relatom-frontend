<template>
	<li >
		<tailwind-link :to="to" class="block md:mr-3" activeClass="text-indigo-600" notActiveClass="text-gray-600">
			<div class="flex flex-col md:flex-row">
				<span v-html="icon" class="w-6 h-6 mb-0 mx-auto md:mb-0"></span>
            	<span class="text-xs my-auto md:ml-1">{{ name }}</span>
			</div>
		</tailwind-link>	
	</li>
</template>

<script>
	import TailwindLink from "~/components/ui/TailwindLink"
	export default {
		props: ['to', 'name', 'icon'],
	}
</script>