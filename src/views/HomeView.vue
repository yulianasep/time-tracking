<script setup>
import UserProfile from '../components/UserProfile.vue';
</script>

<template>
  <main>
    <div class="cards-container">
      <user-profile name="Jeremy Robson" picture="./src/assets/img/image-jeremy.png" />
    </div>
  </main>
</template>
<style>



.cards-container{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-template-rows: 1fr 1fr;
        gap: 2rem;
        width: 80%;
    }

</style>