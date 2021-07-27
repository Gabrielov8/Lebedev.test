<template>
  <main class="page">
    <h1 class="page__title">Первое задание</h1>
    <canvas-component
      canvas-id="'canvas-one'"
    />
  </main>
<!--  <canvas></canvas>-->
</template>

<script>
import Canvas from '../components/Canvas'
export default {
  name: 'FirstTaskPage',
  components: {
    'canvas-component': Canvas
  }
}
</script>

<style scoped lang="scss">
.page {
  padding: 1em;
  display: grid;
  gap: 2em;
  &__title {
    color: $main-dark-color;
  }
}
</style>
