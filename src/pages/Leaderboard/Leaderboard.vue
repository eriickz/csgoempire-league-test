<script setup>
import { ref } from "vue"
import Heading from "../../global/components/Heading.vue"
import DataTable from "../../global/components/DataTable/DataTable.vue"
import columns from "./columns.js"
import leagueService from "../../global/leagueService.js"

const leaderboard = ref(leagueService.getLeaderboard())
</script>

<template>
  <Heading>League Standings</Heading>
  <DataTable :columns="columns" :data="leaderboard" />
</template>
