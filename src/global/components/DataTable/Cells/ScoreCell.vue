<script setup>
  import { computed } from "vue"

  const props = defineProps({
    isMatchPlayed: {
      type: Boolean,
      required: true
    },
    homeScore: {
      type: Number,
      required: true
    },
    awayScore: {
      type: Number,
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

  const score = computed(() => {
    if (!props.isMatchPlayed) {
      return "- : -"
    }

    return `${props.homeScore} : ${props.awayScore}`
  });
</script>

<template>
  <div :class="[containerClasses, { 'text-center': !props.isMatchPlayed }]">
    <p class="font-bold text-base" :class="textClasses">{{score}}</p>
  </div>
</template>
