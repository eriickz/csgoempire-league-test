<script setup>
  const props = defineProps({
    country: {
      type: String,
      required: true
    }
  });
</script>

<template>
  <img 
    class="w-[53px] h-[37px]" 
    :src="`https://flagsapi.codeaid.io/${country}.png`" 
    :alt="`${country} Flag`"
  /> 
</template>
