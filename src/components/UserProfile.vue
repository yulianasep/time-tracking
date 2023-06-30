<script setup>
import { ref } from 'vue'
import { CalendarOptions, DefaultPeriodTime } from '../config/reports.config'

const { DAILY, MONTHLY, WEEKLY } = CalendarOptions

defineProps({
  name: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['onReportChange'])
const reportType = ref(DefaultPeriodTime)

const handleClick = (type) => {
  reportType.value = type
  emit('onReportChange', type)
}
</script>

<template>
  <article class="main-card rounded">
    <section class="profile-card rounded">
      <picture class="profile-card__picture">
        <img :src="picture" alt="profile picture" />
      </picture>
      <h4 class="profile-card__subtitle">Report for</h4>
      <h2 class="profile-card__title">{{ name }}</h2>
    </section>
    <section class="type-report-card">
      <ul>
        <li>
          <a
            :class="{
              active: reportType === DAILY
            }"
            @click="handleClick(DAILY)"
            >Daily</a
          >
        </li>
        <li>
          <a
            :class="{
              active: reportType === WEEKLY
            }"
            @click="handleClick(WEEKLY)"
            >Weekly</a
          >
        </li>
        <li>
          <a
            :class="{
              active: reportType === MONTHLY
            }"
            @click="handleClick(MONTHLY)"
            >Monthly</a
          >
        </li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
.main-card {
  background-color: var(--Dark-blue);
  grid-row-start: 1;
  grid-row-end: 3;
}

.profile-card {
  background-color: var(--Blue);
  padding: 2rem;
}

.profile-card__picture img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: solid 2px;
  border-color: white;
  margin-bottom: 2rem;
}

.profile-card__title {
  font-size: 45px;
  margin-bottom: 5rem;
}

.type-report-card {
  padding: 1.6rem 2rem 0.5rem 2rem;
}

.type-report-card ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.type-report-card ul li {
  margin-bottom: 1rem;
}

.type-report-card ul li a {
  color: var(--Desaturated-blue);
  font-weight: 400;
  cursor: pointer;
}

.type-report-card ul li a.active {
  color: white;
  font-weight: 700;
}

.type-report-card ul li a:hover {
  color: white;
}
</style>
