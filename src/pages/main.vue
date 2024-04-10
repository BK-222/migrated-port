<script setup> 
  import BaseCard from '../components/ui/BaseCard.vue'
  import BaseLink from '../components/ui/BaseLink.vue'
  import TheFooter from '../layouts/TheFooter.vue'
</script>

<template>
  <div>
  <div class="flex flex-col mx-auto">
    <h1 class="text-3xl text-center">Hello, this is Kai.</h1>
    <h3 class="text-xl text-center">I build applications and websites.</h3>
    <h4 class="text"></h4>
    <BaseCard class="flex flex-col">
      <p class="mb-3.5">Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Deserunt excepturi quam tenetur dicta cum quidem asperiores architecto laboriosam, dolorem distinctio!</p>
				<BaseLink to="/contact" class="self-center">Contact</BaseLink>
    </BaseCard>   
  </div>
  <TheFooter />
  </div>
</template>
            