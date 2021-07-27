<template>
  <section
    class="sidebar"
    :class="{'sidebar_hide': !showSidebar}"
  >
    <h2 class="sidebar__title">SVG редактор</h2>
    <ul class="menu">
      <sidebar-menu-item
        v-for="(router, index) in routes"
        :key="index"
        :icon="router.meta.icon"
        :title="router.meta.title"
        :name="router.name"
      />
    </ul>
    <p class="sidebar__description">by Gabrielov</p>
  </section>
</template>

<script>
import SidebarMenuItem from './SidebarMenuItem'
export default {
  name: 'MainSidebar',
  props: {
    showSidebar: {
      type: Boolean,
      required: true
    }
  },
  components: {
    'sidebar-menu-item': SidebarMenuItem
  },
  computed: {
    routes () {
      const routes = this.$router.options.routes.slice()
      return routes.filter(el => el.meta?.icon)
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  display: grid;
  grid-template-rows: 1fr 7fr 1fr;
  width: 18%;
  padding: 1.5em 0;
  background-color: $main-dark-color;
  color: #fff;
  height: 100%;
  &_hide {
    visibility: hidden;
    width: 0;
    padding: 0;
  }
  &__title {
    justify-self: center;
  }
  &__description {
    justify-self: center;
    align-self: end;
    opacity: .6;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
