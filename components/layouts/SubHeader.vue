<template>
  <div class="bg-white border-b mb-4">
    <container class="pt-6 pb-4 flex flex-col md:flex-row md:justify-between md:items-center">
      <div class="mb-3 md:mb-0">
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