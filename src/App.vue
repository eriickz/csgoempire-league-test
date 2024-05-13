<script setup>
import Layout from "./global/components/Layout.vue"
</script>

<template>
  <Layout>
    <router-view :key="$route.path"></router-view>
  </Layout>
</template>
