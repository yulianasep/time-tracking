<script setup>
import { onMounted, ref } from 'vue'
import UserProfile from '../components/UserProfile.vue'
import CardReport from '../components/CardReport.vue'
import { getReportsByCalendar } from '../services/reports'

const reports = ref([])

onMounted(() => {
  reports.value = getReportsByCalendar()
})

const toBackgroundIcon = (title) =>
  `./src/assets/img/icon-${title.toLowerCase().split(' ').join('')}.svg`
const toBackgroundTheme = (title) => `var(--${title.toLowerCase().split(' ').join('')})`

const changeReportByCalendarPeriod = (period) => {
  reports.value = getReportsByCalendar(period)
}
</script>

<template>
  <main>
    <div class="cards-container">
      <user-profile
        name="Jeremy Robson"
        picture="./src/assets/img/image-jeremy.png"
        @on-report-change="changeReportByCalendarPeriod"
      />
      <CardReport
        v-for="report in reports"
        :key="report.title"
        :backgroundIcon="toBackgroundIcon(report.title)"
        :backgroundTheme="toBackgroundTheme(report.title)"
        :title="report.title"
        :hours="`${report.hours}hrs`"
        :subtitle="report.subtitle"
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
