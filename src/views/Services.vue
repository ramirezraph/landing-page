<template>
   <section class="grid h-screen place-items-center">
      <div>
         <h1 class="text-4xl text-white">Sed diam voluptua</h1>
      </div>
   </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
   position: relative;
}

section::before {
   content: '';
   @apply bg-secondary h-3/4 w-4/5;
}
</style>
