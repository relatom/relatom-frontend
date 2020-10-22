<template>
	<TailwindLink :to="to" class="rounded-full py-1 px-3 bg-indigo-600 text-white text-sm inline-flex my-auto"><slot></slot></TailwindLink>
</template>

<script>
import TailwindLink from '~/components/ui/BtnLink'

export default {
  	name: 'BtnLink',
	props: ['to']
}
</script>