<template>
  <div class="min-h-screen flex flex-col bg-gray-200 pb-20 ">
    <Header></Header>
    <Nuxt/>
  </div>
</template>

<script>
  
  import Header from '~/components/layouts/Header';

  export default {
    name: 'default',
    components: { Header } 
  }

</script>

