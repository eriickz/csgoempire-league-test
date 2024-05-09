<script setup>
import TopBar from "./TopBar.vue"
import Footer from "./Footer.vue"
</script>

<template>
  <main class="w-full h-full mb-[26px]">
    <TopBar /> 
    <section class="flex flex-col w-full items-center">
      <slot />
    </section>
  </main>
  <Footer />
</template>
