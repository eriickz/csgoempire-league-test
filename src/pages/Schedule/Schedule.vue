<script setup>
import { watchEffect, ref } from "vue"
import LeagueService from "../../services/LeagueService.js"
import Heading from "../../global/components/Heading.vue"
import DataTable from "../../global/components/DataTable/DataTable.vue"
import columns from "./columns.js"

const leagueService = new LeagueService()
const matches = ref([])

watchEffect(async () => {
  await leagueService.fetchData()

  matches.value = leagueService.getMatches()
});
</script>

<template>
  <Heading>League Schedule</Heading>
  <DataTable :columns="columns" :data="matches" />
</template>
