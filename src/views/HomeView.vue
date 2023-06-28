<script>
import { ref } from "vue"
import UserProfile from '../components/UserProfile.vue'
import CardReport from '../components/CardReport.vue'
import data from '../mocks/data.json'

const reports = ref([]);

export default {
  components: {
    UserProfile,
    CardReport
  },

  setup() {

    const getReport = (type) => {
      try {
        const response = Array.from(data);
        reports.value = response.map(item => {
          let subtitleType = "";
          if (type === 'daily') {
            subtitleType = "Último día";
          } else if (type === 'weekly') {
            subtitleType = "Última semana";
          } else if (type === 'monthly') {
            subtitleType = "Último mes";
          } else {
            subtitleType = '';
          }

          const subtitle = `${subtitleType} - ${item.timeframes[type].previous}hrs`;
          
          return {
            title: item.title,
            hours: item.timeframes[type].current,
            subtitle
          };
        });


      } catch (error) {
        //throw new Error(error);
        alert("Estamos teniendo problemas, intentalo más tarde")   
      }
    };

    const toBackgroundIcon = (title) => `./src/assets/img/icon-${title.toLowerCase().split(' ').join('')}.svg`
    const toBackgroundTheme = (title) => `var(--${title.toLowerCase().split(' ').join('')})`

    return {
      reports,
      getReport,
      toBackgroundIcon,
      toBackgroundTheme
    };
  }
}
</script>

<template>
  <main>
    <div class="cards-container">
      <user-profile name="Jeremy Robson" picture="./src/assets/img/image-jeremy.png" @report-click="getReport"/>
      <CardReport v-for="report in reports" 
      :key="report.title" 
      :backgroundIcon="toBackgroundIcon(report.title)" 
      :backgroundTheme="toBackgroundTheme(report.title)" 
      :title="report.title" 
      :hours="`${report.hours}hrs`" 
      :subtitle="report.subtitle" />
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
