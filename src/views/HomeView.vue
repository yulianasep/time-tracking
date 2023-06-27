<script setup>
import UserProfile from '../components/UserProfile.vue'
import CardReport from '../components/CardReport.vue'
</script>
<template>
  <main>
    <UserProfile />
    <div>
      <CardReport title="Work" hours="32hrs" subtitle="Last Day - 36hrs" />
    </div>
  </main>
</template>

<style scoped></style>
