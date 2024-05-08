<script setup>
import TableHead from "./TableHead.vue"
import Cell from "./Cells/Cell.vue"
import FlagCell from "./Cells/Flag/FlagCell.vue"
import ScoreCell from "./Cells/ScoreCell.vue"

const props = defineProps({
  columns: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: false
  }
});
</script>

<template>
  <table class="w-[90%] text-tabletext">
    <thead>
      <tr class="bg-table h-10 text-xs text-left">
        <template v-for="column in props.columns" :key="column.name">
          <TableHead :class="column.textClasses">{{column.name}}</TableHead>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr 
        class="h-[70px] border-b border-b-table" 
        v-for="(item, index) in props.data" :key="item.id"
        :class="{ 'bg-graybg': index % 2 !== 0 }" 
      >
        <Cell v-for="column in props.columns" :key="column.name">
          <template v-if="column.type === 'team'">
            <FlagCell 
              :country="item[column.key]" 
              :position="column.flagPosition"
              :containerClasses="column.containerClasses"
              :textClasses="column.textClasses"
            />
          </template>
          <template v-else-if="column.type === 'score'">
            <ScoreCell
              :isMatchPlayed="item.matchPlayed"
              :homeScore="item.homeTeamScore"
              :awayScore="item.awayTeamScore"
              :containerClasses="column.containerClasses"
              :textClasses="column.textClasses"
            />
          </template>
          <template v-else>
            <div :class="column.containerClasses">
              <p class="text-sm" :class="column.textClasses">{{item[column.key]}}</p>
            </div>
          </template>
        </Cell>
      </tr>
    </tbody> 
  </table>
</template>
