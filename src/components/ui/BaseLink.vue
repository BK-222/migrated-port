<script setup>
  const props = defineProps({
    to: { type: String, required: false, default: null },
    external: { type: Boolean, required: false, default: false }
  });
</script>

<template>
  <div v-if="external"
   class="inline-block py-0.5 px-3 border border-solid border-cyan-500 rounded-sm no-underline cursor-pointer text-gray-300 font-semibold hover:bg-cyan-500 delay-100">
    <slot></slot>
  </div>
  <router-link v-else :to="to"
   class="inline-block py-3 px-6 border border-solid border-cyan-500 rounded-sm no-underline cursor-pointer text-gray-300 font-semibold hover:bg-cyan-500 delay-100">
    <slot></slot>
  </router-link>
</template>