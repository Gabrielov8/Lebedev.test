<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>
import PersonalAreaLayout from '@/layouts/PersonalAreaLayout'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'personal-area') + '-layout'
    }
  },
  components: {
    'personal-area-layout': PersonalAreaLayout
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
}
</style>
