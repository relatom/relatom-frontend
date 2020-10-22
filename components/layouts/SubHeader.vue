<template>
  <div class="bg-white border-b">
    <div class="container mx-auto pb-4 px-4">
      <h1 class="font-bold text-2xl">{{ title }}</h1>
      <div class="flex mt-2" v-if="hasActionsSlot">
        <slot name="actions"></slot>
      </div>
    </div>
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