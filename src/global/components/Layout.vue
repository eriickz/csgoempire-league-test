<script setup>
import TopBar from "./TopBar.vue"
import Footer from "./Footer.vue"
</script>

<template>
  <TopBar /> 
  <main class="w-full flex flex-col items-center">
    <section class="flex flex-col items-center w-[90%]">
      <slot />
    </section>
  </main>
  <Footer />
</template>
