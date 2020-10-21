<template>
	<li >
		<tailwind-link :to="to" class="block h-6" activeClass="text-indigo-600" notActiveClass="text-gray-500">
			<span v-html="icon" class="w-6 h-6 inline-block mb-0"></span>
            <span class="block text-xs font-bold hidden">{{ name }}</span>
		</tailwind-link>	
	</li>
</template>

<script>
	import TailwindLink from "~/components/ui/TailwindLink"
	export default {
		props: ['to', 'name', 'icon'],
	}
</script>