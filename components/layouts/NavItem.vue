<template>
	<li class="mr-4 last:mr-0">
		<tailwind-link :to="to" class="block font-semibold hover:text-gray-300" activeClass="text-white" notActiveClass="text-gray-500">
			<div class="flex flex-col md:flex-row items-center">
				<span v-html="icon" class="w-5 h-5 mb-0 mx-auto md:mb-0"></span>
            	<span class="text-xs my-auto ml-1">{{ name }}</span>
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