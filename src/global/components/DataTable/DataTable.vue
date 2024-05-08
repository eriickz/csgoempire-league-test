<script setup>
  import TableHead from "./TableHead.vue"
  import TableCell from "./TableCell.vue"
</script>

<template>
  <table class="w-[90%] text-tabletext">
    <tr class="bg-table h-10 text-xs text-left">
      <TableHead>Date/Time</TableHead>
      <TableHead>Stadim</TableHead>
      <TableHead>Home Team</TableHead>
      <TableHead></TableHead>
      <TableHead>Away Team</TableHead>
    </tr>
    <tr class="h-[70px] border-b border-b-table">
      <TableCell>
        <div class="w-fit [text-align-last:end]">
          5.5.2022 <br/> 11:50
        </div>
      </TableCell>
      <TableCell>Maracá</TableCell>
      <TableCell>Brazil</TableCell>
      <TableCell>1:0</TableCell>
      <TableCell>Serbia</TableCell>
    </tr>
    <tr class="h-[70px] border-b border-b-table bg-graybg">
      <TableCell>
        <div class="w-fit [text-align-last:end]">
          5.5.2022 <br/> 11:50
        </div>
      </TableCell>
      <TableCell>Maracá</TableCell>
      <TableCell>Brazil</TableCell>
      <TableCell>1:0</TableCell>
      <TableCell>Serbia</TableCell>
    </tr>
  </table>
</template>
