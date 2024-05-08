<script setup>
import { inject } from "vue"
import Heading from "../../global/components/Heading.vue"
import DataTable from "../../global/components/DataTable/DataTable.vue"
import columns from "./columns.js"
import leagueService from "../../global/leagueService.js"
import { LEAGUE_MATCHES } from "../../global/constants.js"

const matches = inject(LEAGUE_MATCHES)
</script>

<template>
  <Heading>League Schedule</Heading>
  <DataTable :columns="columns" :data="matches" />
</template>
