<script setup>
import UserProfile from '../components/UserProfile.vue'
import CardReport from '../components/CardReport.vue'
</script>

<template>
  <main>
    <div class="cards-container">
      <user-profile name="Jeremy Robson" picture="./src/assets/img/image-jeremy.png" />
      <CardReport
        backgroundIcon="./src/assets/img/icon-work.svg"
        backgroundTheme="var(--Light-red)"
        title="Work"
        hours="32hrs"
        subtitle="Last Week - 36hrs"
      />
      <CardReport
        backgroundIcon="./src/assets/img/icon-play.svg"
        backgroundTheme="var(--Soft-blue)"
        title="Play"
        hours="10hrs"
        subtitle="Last Week - 8hrs"
      />
      <CardReport
        backgroundIcon="./src/assets/img/icon-study.svg"
        backgroundTheme="var(--Normal-red)"
        title="Study"
        hours="4hrs"
        subtitle="Last Week - 5hrs"
      />
      <CardReport
        backgroundIcon="./src/assets/img/icon-exercise.svg"
        backgroundTheme="var(--Lime-green)"
        title="Exercise"
        hours="4hrs"
        subtitle="Last Week - 5hrs"
      />
      <CardReport
        backgroundIcon="./src/assets/img/icon-social.svg"
        backgroundTheme="var(--Violet)"
        title="Social"
        hours="5hrs"
        subtitle="Last Week - 10hrs"
      />
      <CardReport
        backgroundIcon="./src/assets/img/icon-self-care.svg"
        backgroundTheme="var(--Soft-orange)"
        title="Self Care"
        hours="2hrs"
        subtitle="Last Week - 2hrs"
      />
    </div>
  </main>
</template>
<style>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  width: 80%;
}
</style>
