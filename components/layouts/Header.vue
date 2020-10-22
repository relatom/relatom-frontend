<template>
  <header class="bg-white pt-6 pb-3">
    <div class="container mx-auto flex justify-between px-4 md:px-0 h-6">
      <Back></Back>
      <Logo></Logo>
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