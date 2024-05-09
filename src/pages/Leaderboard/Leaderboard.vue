<script setup>
import { ref, computed, watchEffect } from "vue"
import Heading from "../../global/components/Heading.vue"
import DataTable from "../../global/components/DataTable/DataTable.vue"
import columns from "./columns.js"
import leagueService from "../../global/leagueService.js"

const leaderboard = ref([])

async function loadLeaderboard() {
  await leagueService.fetchData()
  leaderboard.value = leagueService.getLeaderboard()
}

loadLeaderboard()

const isTieBreaker = computed(() => {
  const teamsPoints = leaderboard.value.map(team => team.points)
  const teamsWithoutDuplicate = new Set(teamsPoints)

  return teamsWithoutDuplicate.size < teamsPoints.length
});

const tieBreakers = computed(() => {
  let goalsDiff = []
  let goalsScored = []
  let alphabeticAsc = []

  if (!isTieBreaker.value) {
    return null
  }

  goalsDiff = leaderboard.value.toSorted((teamA, teamB) => teamB.goalsDifference - teamA.goalsDifference) 
  goalsScored = leaderboard.value.toSorted((teamA, teamB) => teamB.goalsFor - teamA.goalsFor)
  alphabeticAsc = leaderboard.value.toSorted((teamA, teamB) => {
    if (teamA.teamName < teamB.teamName) {
      return -1
    }

    if (teamA.teamName > teamB.teamName) {
      return 1
    }

    return 0
  })

  return {
    "goals-diff": goalsDiff,
    "goals-scored": goalsScored,
    "alphabetic-asc": alphabeticAsc
  }
});
</script>

<template>
  <Heading>League Standings</Heading>
  <DataTable :columns="columns" :data="leaderboard" />

  <template v-if="isTieBreaker">
    <Heading class="mt-10">Head-To-Head Tiebreaker</Heading>
    <DataTable :columns="columns" :data="leaderboard" />

    <Heading class="mt-10">Goal By Difference Tiebreaker</Heading>
    <DataTable :columns="columns" :data="tieBreakers['goals-diff']" />

    <Heading class="mt-10">Scored Goals Tiebreaker</Heading>
    <DataTable :columns="columns" :data="tieBreakers['goals-scored']" />

    <Heading class="mt-10">Alphabetic Ascending Tiebreaker</Heading>
    <DataTable :columns="columns" :data="tieBreakers['alphabetic-asc']" />
  </template>
</template>
