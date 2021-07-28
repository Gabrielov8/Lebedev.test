<template>
  <li class="menu-item">
    <router-link
      :to="{ name }"
      class="menu-item__link"
    >
<!--      <img-->
<!--        class="menu-item__logo"-->
<!--        :src="getLink"-->
<!--        :alt="getAlt"-->
<!--        width="20"-->
<!--        height="20"-->
<!--      >-->
      {{ title }}
    </router-link>
  </li>
</template>
<script>
export default {
  name: 'SidebarMenuItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    getLink () {
      return require(`@/assets/${this.icon}-menu-icon.svg`)
    },
    getAlt () {
      return `Логотип ${this.title} навигационного меню`
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-item {
  color: #fff;
  position: relative;
  &__logo {
    margin-right: 1em;
  }
  &__link {
    padding: 1em;
    color: #fff;
    display: flex;
    align-items: center;
    opacity: .8;
    &:hover, &:focus {
      background-color: rgba(88, 85, 85, 0.18);
      opacity: 1;
    }
  }
}

.router-link-active {
  border-radius: 4px;
  background-color: #535151;
  opacity: 1;
  &::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 100%;
    background-color: #42b983;
    left: 0;
    top: 0;
  }
}

.router-link-active:hover {
  background-color: #535151;
  opacity: 1;
}
</style>
