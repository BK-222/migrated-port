<script setup>
import TheHeader from './layouts/TheHeader.vue'
import TheFooter from './layouts/TheFooter.vue'
</script>

<template>
  <TheHeader />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
</template> 

<style scoped>

.route-leave-from, .route-enter-to {
  opacity: 0.5 ease-in;
  transform: translateY(0);
}

.route-leave-to, .route-enter-from {
  opacity: 0;
}

.route-leave-active {
  transition: all 0.25s ease-in;
}

.route-enter-active {
  transition: all 0.25s ease-out;
}

</style>