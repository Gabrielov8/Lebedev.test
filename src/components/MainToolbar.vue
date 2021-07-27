<template>
  <div class="toolbar">
    <button
      @click="toggleSidebar"
      class="toolbar__btn"
    />
  </div>
</template>
<script>
export default {
  name: 'MainToolbar',
  methods: {
    toggleSidebar () {
      this.$emit('toggle-sidebar')
    }
  }
}
</script>
<style lang="scss" scoped>
.toolbar {
  border: 1px solid lightgray;
  padding: 1em;
  &__btn {
    background-image: url('../assets/toolbar-icon.svg');
    width: 16px;
    height: 16px;
    background-color: #fff;
    &:hover {
      opacity: .5;
    }
  }
}
</style>
