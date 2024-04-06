<script setup>
import TheHeader from './layouts/TheHeader.vue'
import TheFooter from './layouts/TheFooter.vue'
</script>

<template>
  <TheHeader />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in" class="transition-opacity duration-250 ease-out" enter-active-class="opacity-0" leave-active-class="opacity-0">
        <component :is="Component" />
      </transition>
    </router-view>
  <TheFooter />
</template> 