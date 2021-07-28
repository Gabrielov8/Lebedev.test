<template>
  <main class="page">
    <h1 class="page__title">Задача №3</h1>
    <canvas-component
      class="page__canvas"
      canvas-id="'canvas-three'"
      :new-element="newElement"
      :remove-item-id="removeItemId"
    />
    <add-item-form
      class="page__form"
      @add-new-element="addElement"
    />
    <remove-item-form
      class="page__form"
      :new-element="newElement"
      @remove-item="removeElement"
    />
  </main>
</template>

<script>
import Canvas from '../components/Canvas'
import AddItemForm from '../components/AddItemForm'
import RemoveItemForm from '../components/RemoveItemForm'
export default {
  name: 'ThirdTaskPage',
  components: {
    'canvas-component': Canvas,
    'add-item-form': AddItemForm,
    'remove-item-form': RemoveItemForm
  },
  data () {
    return {
      newElement: null,
      removeItemId: null
    }
  },
  methods: {
    addElement (dataElement) {
      this.newElement = dataElement
      this.$nextTick(() => {
        this.newElement = null
      })
    },
    removeElement (index) {
      this.removeItemId = index
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  &__title {
    grid-column: span 4;
  }
  &__canvas {
    grid-column: span 4;
  }
  &__form {
    width: 100%;
    grid-column: span 2;
  }
}
</style>
