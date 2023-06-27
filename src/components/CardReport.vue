<script setup>
defineProps({
  title: String,
  hours: String,
  subtitle: String
})
</script>

<template>
  <div class="primary-card">
    <picture class="background-card">
      <img src="../assets/img/icon-work.svg" alt="work" />
    </picture>

    <article class="card-report">
      <section class="content">
        <div class="header-card">
          <p class="card-title">{{ title }}</p>
          <span><img src="../assets/img/icon-ellipsis.svg" alt="options" /></span>
        </div>
        <h1 class="time">{{ hours }}</h1>
        <p class="subtitle-previous">{{ subtitle }}</p>
      </section>
    </article>
  </div>
</template>

<style scoped>
.primary-card {
  background-color: hsl(15, 100%, 70%);
  width: max-content;
  height: max-content;
  border-radius: 1.3rem;
  overflow: hidden;
}
.card-report {
  background-color: hsl(235, 46%, 20%);
  padding: 1rem;
  border-radius: 1.3rem;
  color: white;
}

.header-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/*
.card-report {
  height: 100vh;
  font-family: 'Rubik', sans-serif;
  background-color: hsl(226, 43%, 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

span {
  justify-self: flex-end;
}

img {
  border: 2px solid white;
  border-radius: 50px;
  height: 70px;
  margin-bottom: 30px;
}

span > img {
  padding: 3px;
  border: 0;
  height: auto;
}

span > img:hover {
  cursor: pointer;
  filter: sepia(100%) grayscale(100%) brightness(100%);
}

.card {
  border-radius: 20px;
  position: relative;
}

.content {
  box-sizing: border-box;
  padding: 25px;
  background-color: hsl(235, 46%, 20%);
  width: 100%;
  height: 80%;
  border-radius: 20px;
  position: absolute;
  bottom: 0;
  display: grid;
  grid-template: repeat(3, 1fr) / 1fr 1fr;
  transition: background-color 0.2s;
}

.content:hover {
  background-color: hsl(236, 38%, 33%);
}

.time {
  grid-column: span 2;
  font-size: 48px;
  font-weight: 300;
}

.subtitle-previous {
  color: hsl(236, 100%, 87%);
  font-weight: 300;
  font-size: 14px;
  grid-column: span 2;
  align-self: flex-end;
} */
</style>
