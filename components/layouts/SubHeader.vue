<template>
  <div class="bg-white border-b mb-4">
    <container class="pb-4">
      <h1 class="font-bold text-2xl">{{ title }}</h1>
      <div class="flex flex-wrap mt-2" v-if="hasActionsSlot">
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