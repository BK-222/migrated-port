<script setup>
  import BaseLink from '../components/ui/BaseLink.vue'
</script>

<template>
  <div>
    <nav class="flex mb-2 lg:mb-0">
      <ul class="flex lg:justify-center items-center w-full mt-1 font-bold text-sm overflow-x-auto">
        <img class="h-8 w-12 lg:h-10 lg:w-14 m-1 lg:mr-28 bg-cyan-500" src="_img/favicons/github.svg">
        <li class="m-3 lg:m-6 hover:text-cyan-500 delay-100">
          <router-link to="/about"><span class="text-cyan-500 pr-1">#01.</span>About</router-link>
        </li>
        <li class="m-3 lg:m-6 hover:text-cyan-500 delay-100">
          <router-link to="/projects"><span class="text-cyan-500 pr-1">#02.</span>Projects</router-link>
        </li>
        <li class="m-3 lg:m-6 hover:text-cyan-500 delay-100 whitespace-nowrap">
          <router-link to="/dev-skills"><span class="text-cyan-500 pr-1">#03.</span>Dev. Skills</router-link>
        </li>
        <li class="m-3 lg:m-6 ml-auto">
          <base-link to="/contact">Contact</base-link>
        </li>
      </ul>
    </nav>
  </div>
</template>



// would need to put div img inside the ul to make it scrollable
