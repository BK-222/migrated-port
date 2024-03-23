<script setup>

import { ref, computed, defineProps } from 'vue'

import BaseCard from './components/ui/BaseCard.vue'
import BaseLink from './components/ui/BaseLink.vue'



const props = defineProps({
  title: { type: String, required: true }, 
  link: { type: String, required: true },
  gitHub: { type: String, required: true }, 
  tech: { type: String, required: true }
});

</script>

<template>
  <div>
    <BaseCard class="group transition delay-75 border border-transparent hover:border-cyan-500">
      <h3 class="mb-2 text-lg font-bold group-hover:text-cyan-500 delay-100">{{ title }}</h3>
      <BaseLink external><a :href="link" target="_blank">link</a></BaseLink>
      <BaseLink external><a :href="gitHub" target="_blank">code</a></BaseLink>
      <p class="mt-1 font-semibold">{{ tech }}</p>
    </BaseCard>
  </div>
</template>