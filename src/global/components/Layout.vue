<script setup>
import TopBar from "./TopBar.vue"
import Footer from "./Footer.vue"
</script>

<template>
  <main class="w-full">
    <TopBar /> 
    <section class="flex flex-col w-full items-center">
      <slot />
    </section>
    <Footer />
  </main>
</template>
