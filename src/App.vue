<script setup>
import TheHeader from './layouts/TheHeader.vue'
import TheFooter from './layouts/TheFooter.vue'
</script>

<template>
  <TheHeader />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in" enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition duration-250 ease-out" leave-active-class="transition duration-250 ease-in" enter-to-class="opacity-50 ease-in transform-translate-y-0" leave-from-class="opacity-50 ease-in transform-translate-y-0">
        <component :is="Component" />
      </transition>
    </router-view>
  <TheFooter />
</template> 