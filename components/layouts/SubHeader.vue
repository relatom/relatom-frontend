<template>
  <div class="bg-white border-b mb-4">
    <container class="py-6 flex justify-between items-center">
      <div>
        <h1 class="font-bold text-2xl text-gray-900 leading-tight">{{ title }}</h1>
      </div>
      <div class="flex flex-wrap" v-if="hasActionsSlot">
        <slot name="actions"></slot>
      </div>
    </container>
  </div>
</template>

<script>
export default {

  name: 'SubHeader',
  props: ['title'],
  computed: {
    hasActionsSlot() {
      return !!this.$slots.actions
    }
  }
}
</script>

<style lang="css" scoped>
</style>