<script setup>
import { computed } from "vue";
const props = defineProps({
  maxValue: Number,
  minValue: Number,
});
const randomNumber = computed(() => {
  console.log(props.maxValue);
  console.log(props.minValue);
  const max = Math.floor(props.maxValue);
  const min = Math.ceil(props.minValue);
  const rand = Math.floor(Math.random() * (max - min) + min);
  return rand;
});
</script>
<template>
  <h3>Random number between {{ props.minValue }} and {{ props.maxValue }}</h3>
  <p>Your random number is: {{ randomNumber }}</p>
</template>
