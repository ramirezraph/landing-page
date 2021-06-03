<template>
   <div class="w-screen h-screen">
      <hero />
      <services />
   </div>
</template>

<script>
import Hero from './Hero.vue';
import Services from './Services.vue';
// @ is an alias to /src

export default {
   name: 'Index',
   components: { Hero, Services },
};
</script>

<style lang="scss" scoped></style>
