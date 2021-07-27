<template>
  <div class="wrapper">
    <main-sidebar :show-sidebar="showSidebar" />
    <div class="content-wrapper">
      <main-toolbar @toggle-sidebar="toggleSidebar" />
      <router-view />
    </div>
  </div>
</template>

<script>
import MainSidebar from '../components/sidebar/MainSidebar'
import MainToolbar from '../components/MainToolbar'
export default {
  name: 'PersonalAreaLayout',
  components: {
    'main-sidebar': MainSidebar,
    'main-toolbar': MainToolbar
  },
  data () {
    return {
      showSidebar: true
    }
  },
  methods: {
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  height: 100%;
  width: 100%;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
