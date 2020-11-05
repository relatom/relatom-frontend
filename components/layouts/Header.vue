<template>
  <header class="bg-gray-900 md:pt-4 md:pb-4">
    <div class="container mx-auto flex justify-between items-center md:px-0 md:h-6">
      <Back></Back>
      <Nav></Nav>
    </div>
  </header>
</template>

<script>
  
  import Back from '~/components/layouts/Back';
  import Logo from '~/components/layouts/Logo';
  import Nav from '~/components/layouts/Nav';

  export default {
    name: 'Header',
    components: { Back, Logo, Nav } 
  }

</script>