<script setup> 
  import BaseCard from '../components/ui/BaseCard.vue'
</script>

<template>
  <div class="flex flex-col items-center">
    <h3 class="text-xl">#03. Dev. Skills</h3>
    <h4>Some of the technologies that I utilize</h4>
    <base-card class="flex">
      <ul>
        <div class="flex items-center py-0.5">
          <img class="h-5 w-5 bg-cyan-500" src="/src/assets/favicons/js.svg">
          <li class="ml-1">JavaScript (ES6+)</li>
        </div>
        <div class="flex items-center py-0.5">
          <img class="h-5 w-5 bg-cyan-500" src="/src/assets/favicons/vue.svg">
          <li class="ml-1">Vue</li>
        </div>
        <div class="flex items-center py-0.5">
          <img class="h-5 w-5 bg-cyan-500" src="/src/assets/favicons/tailwind.svg">
          <li class="ml-1">Tailwind CSS</li>
        </div>
        <div class="flex items-center py-0.5">
          <img class="h-5 w-5 bg-cyan-500" src="/src/assets/favicons/git.svg">
          <li class="ml-1">Git</li>
        </div>
        <div class="flex items-center py-0.5">
          <img class="h-5 w-5 bg-cyan-500" src="/src/assets/favicons/node.svg">
          <li class="ml-1">Node.js</li>
        </div>
        <div class="flex items-center py-0.5">
          <img class="h-5 w-5 bg-cyan-500" src="/src/assets/favicons/firebase.svg">
          <li class="ml-1">Firebase</li>
        </div>
      </ul>
    </base-card>
  </div>
</template>