<script setup>

import { ref, computed, defineProps } from 'vue'

import BaseCard from './components/ui/BaseCard.vue'
import BaseLink from './components/ui/BaseLink.vue'


const props = defineProps({
  title: { type: String, required: true },
  img_1: { type: String, required: true },
  img_2: { type: String, required: true },
  img_3: { type: String, required: true },
  link: { type: String, required: true },
  gitHub: { type: String, required: true }, 
  tech: { type: String, required: true }
});


function createModifiedImage(imageProp) {
  const image = ref(imageProp);
  const modifiedImage = computed(() => {
    return { 'backgroundImage': `url(${image.value})` };
  });
  return modifiedImage;
}

  const modifiedImageOne = createModifiedImage(props.img_1);
  const modifiedImageTwo = createModifiedImage(props.img_2);
  const modifiedImageThree = createModifiedImage(props.img_3);
  

const imageThreee = ref(props.img_3);
const modifiedImageThreee = computed(() => {
  return { 'backgroundImage': `url(${imageThree.value})` };
});

</script>

<template>
  <div>
    <BaseCard class="group transition delay-75 border border-transparent hover:border-cyan-500">
      <h3 class="mb-2 text-lg font-bold group-hover:text-cyan-500 delay-100">{{ title }}</h3>
      <div class="flex my-3.5">
<div class="bg-norepeat bg-cover bg-center h-16 w-24 mr-3 cursor-pointer transform hover:scale-105" :style="modifiedImageOne"></div>
        <div class="bg-norepeat bg-cover bg-center h-16 w-24 mr-3 cursor-pointer transform hover:scale-105 hover:cursor-pointer" :style="modifiedImageTwo"></div>
        <div class="bg-norepeat bg-cover bg-center h-16 w-24 cursor-pointer transform hover:scale-105 hover:cursor-pointer" 
:style="modifiedImageThree"></div>
  </div>
      <BaseLink external class="mr-1"><a :href="link" target="_blank">link</a></BaseLink>
      <BaseLink external><a :href="gitHub" target="_blank">code</a></BaseLink>
      <p class="mt-1 font-semibold">{{ tech }}</p>
    </BaseCard>
  </div>
</template>