<script setup>
import { ref, computed, defineProps } from 'vue'

import BaseCard from '../components/ui/BaseCard.vue'

  
const props = defineProps({
  title: { type: String, required: true },
  img_1: { type: String, required: true },
  img_2: { type: String, required: true },
  img_3: { type: String, required: true },
  link: { type: String, required: true },
  gitHub: { type: String, required: true }, 
  tech: { type: String, required: true }
});

const imageOne = ref(props.img_1);
const modifiedImageOne = computed(() => {
  return { 'backgroundImage': url(`${imageOne.value}`) };
});

const imageTwo = ref(props.img_2);
const modifiedImageTwo = computed(() => {
  return { 'backgroundImage': url(`${imageTwo.value}`) };
});

const imageThree = ref(props.img_3);
const modifiedImageThree = computed(() => {
  return { 'backgroundImage': url(`${imageThree.value}`) };
}); 
</script>

<template>
  <div>
    <BaseCard class="group transition delay-75 border border-transparent hover:border-cyan-500">
      <h3 class="mb-2 text-lg font-bold group-hover:text-cyan-500 delay-100">{{ title }}</h3>
      <div class="flex my-3.5">
        <div class="bg-norepeat bg-cover bg-center h-16 w-24 mr-3 cursor-pointer transform hover:scale-105" :style="modifiedImageOne"></div>
        <div class="bg-norepeat bg-cover bg-center h-16 w-24 mr-3 cursor-pointer transform hover:scale-105 hover:cursor-pointer" :style="modifiedImageTwo"></div>
        <div class="bg-norepeat bg-cover bg-center h-16 w-24 cursor-pointer transform hover:scale-105 hover:cursor-pointer" :style="modifiedImageThree"></div>
      </div>
      <base-link external><a :href="link" target="_blank">link</a></base-link>
      <base-link external><a :href="gitHub" target="_blank">code</a></base-link>
      <p class="mt-1 font-semibold">{{ tech }}</p>
    </BaseCard>
  </div>
</template>