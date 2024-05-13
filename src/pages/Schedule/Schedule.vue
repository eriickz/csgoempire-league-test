<script setup>
import { ref, watchEffect } from "vue"
import axios from "axios"
import Heading from "../../global/components/Heading.vue"
import DataTable from "../../global/components/DataTable/DataTable.vue"
import columns from "./columns.js"
import leagueService from "../../global/leagueService.js"

const matches = ref([])

async function loadMatches() {
  const { data } = await axios.get("/getAccessToken") 
  axios.defaults.headers.common["Authorization"] = `Bearer ${data.access_token}`

  await leagueService.fetchData()
  matches.value = leagueService.getMatches()
}

loadMatches()
</script>

<template>
  <Heading>League Schedule</Heading>
  <DataTable :columns="columns" :data="matches" />
</template>
