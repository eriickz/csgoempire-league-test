<script setup>
import { watchEffect } from "vue"
import axios from "axios"
import Layout from "./global/components/Layout.vue"

watchEffect(async () => {
  const { data } = await axios.get("/getAccessToken") 
  sessionStorage.setItem("token", data.access_token)
});
</script>

<template>
  <Layout>
    <router-view :key="$route.path"></router-view>
  </Layout>
</template>
