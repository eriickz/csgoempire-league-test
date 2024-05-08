<script setup>
  import Flag from "./Flag.vue"

  const props = defineProps({
    country: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    containerClasses: {
      type: String,
      required: false,
    },
    textClasses: {
      type: String,
      required: false,
    },
  });
</script>

<template>
  <div class="flex items-center gap-x-2" :class="containerClasses">
    <Flag :country="country" v-if="position === 'first'" /> 
    <p class="font-bold text-base" :class="textClasses">{{country}}</p>
    <Flag :country="country" v-if="position === 'last'" />
  </div>
</template>
