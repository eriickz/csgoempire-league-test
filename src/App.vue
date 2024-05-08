<script setup>
import { watchEffect, inject } from "vue"
import axios from "axios"
import leagueService from "./global/leagueService.js"
import Layout from "./global/components/Layout.vue"
import { LEAGUE_MATCHES } from "./global/constants.js"

const matches = inject(LEAGUE_MATCHES)

watchEffect(async () => {
  const { data } = await axios.get("/getAccessToken") 
  sessionStorage.setItem("token", data.access_token)

  await leagueService.fetchData()
  matches.value = leagueService.getMatches()
});
</script>

<template>
  <Layout>
    <router-view :key="$route.path"></router-view>
  </Layout>
</template>
