<template>
   <section class="h-screen grid place-items-center">
      <div>
         <h1 class="text-white text-4xl">Sed diam voluptua</h1>
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
