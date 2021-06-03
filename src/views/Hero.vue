<template>
   <section class="w-full h-full px-24">
      <div class="flex">
         <div class="w-full h-full relative">
            <div class="relative top-32 text-left">
               <h1>Lorem Ipsum</h1>
               <h5 class="ml-2 text-4xl opacity-90">
                  consetetur sadipscing elitr
               </h5>
               <p class="ml-2 mt-3 opacity-80">
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore
                  magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                  et justo duo dolores et ea rebum.
               </p>
               <button
                  class="bg-primary px-16 py-4 text-white rounded-xl mt-11"
               >
                  Get Started
               </button>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
// @ is an alias to /src

export default {
   name: 'Hero',
   components: {},
};
</script>

<style lang="scss" scoped>
section {
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   position: relative;
}

section::before {
   content: '';
   background-image: url('../assets/images/home.jpg');
   background-size: cover;
   width: 35%;
   height: 90%;
   position: absolute;
   top: calc(5%);
   right: 5rem;
   @apply rounded-2xl;
}

section::after {
   content: '';
   width: 80%;
   height: 30%;
   position: absolute;
   bottom: 0;
   left: 0;
   z-index: -1;
   @apply bg-secondary;
}

h1 {
   font-size: 7.5rem;
}

p {
   width: 60ch;
}

img {
   width: 120%;
}
</style>
