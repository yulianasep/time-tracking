<script setup>
defineProps({
  title: String,
  hours: String,
  subtitle: String
})
</script>

<template>
  <div class="card">
    <div class="content">
      <p class="card-title">{{ title }}</p>
      <span><img src="images/icon-ellipsis.svg" alt="options" /></span>
      <h1 class="time">{{ hours }}</h1>
      <p class="subtitle-previous">{{ subtitle }}</p>
    </div>
  </div>
</template>

<style scoped></style>
