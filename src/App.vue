<template>
   <div id="app">
      <nav
         class="w-full absolute bg-transparent top-0 px-24 pt-3 flex gap-x-10 items-center"
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="90"
            viewBox="0 0 38 90"
         >
            <g id="Group_4" data-name="Group 4" transform="translate(-75 -11)">
               <text
                  id="L"
                  transform="translate(75 76)"
                  fill="#042848"
                  font-size="38"
                  font-family="SegoeUI-Bold, Segoe UI"
                  font-weight="700"
               >
                  <tspan x="0" y="0">L</tspan>
               </text>
               <text
                  id="L-2"
                  data-name="L"
                  transform="translate(113 60) rotate(180)"
                  fill="#042848"
                  font-size="38"
                  font-family="SegoeUI-Bold, Segoe UI"
                  font-weight="700"
               >
                  <tspan x="0" y="0">L</tspan>
               </text>
               <text
                  id="_."
                  data-name="."
                  transform="translate(99 52)"
                  fill="#042848"
                  font-size="38"
                  font-family="SegoeUI-Bold, Segoe UI"
                  font-weight="700"
               >
                  <tspan x="0" y="0">.</tspan>
               </text>
            </g>
         </svg>
         <ul class="flex gap-x-7 mt-5 text-base">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact Us</a></li>
         </ul>
      </nav>
      <router-view />
   </div>
</template>

<style lang="scss">
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #042848;
   width: 100vw;
   height: 100vh;
}
</style>
