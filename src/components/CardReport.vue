<script>
export default {
  props: {
    backgroundTheme: {
      type: String,
      required: true
    },

    backgroundIcon: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },
    hours: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="primary-card rounded" :style="{ backgroundColor: backgroundTheme }">
    <picture class="background-card">
      <img :src="backgroundIcon" alt="work" />
    </picture>

    <article class="card-report rounded">
      <div class="card-report__container">
        <section class="content">
          <div class="header-card">
            <p class="card-title">{{ title }}</p>
            <span><img src="../assets/img/icon-ellipsis.svg" alt="options" /></span>
          </div>
          <h1 class="time">{{ hours }}</h1>
          <p class="subtitle-previous">{{ subtitle }}</p>
        </section>
      </div>
    </article>
  </div>
</template>

<style scoped>
.primary-card {
  width: 100%;
  height: 100%;
}

.background-card {
  display: flex;
  justify-content: flex-end;
  height: 2.5rem;
  overflow: hidden;
  position: relative;
}

.background-card img {
  position: absolute;
  right: 1rem;
  top: -0.5rem;
}

.card-report {
  background-color: var(--Dark-blue);
  padding: 1rem;
  color: white;
}

.card-report__container {
  margin: 1rem 1.5rem;
}

.header-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-title {
  font-size: 1rem;
  font-weight: 700;
}

.time {
  font-size: 4rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.subtitle-previous {
  font-size: 1rem;
  font-weight: 400;
  color: var(--Desaturated-blue);
}
</style>
