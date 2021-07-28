<template>
  <main class="page">
    <h1 class="page__title">Второе задание</h1>
    <canvas-component
      canvas-id="'canvas-two'"
      :new-element="newElement"
    />
    <add-item-form
      @add-new-element="addElement"
    />
  </main>
</template>

<script>
import Canvas from '../components/Canvas'
import AddItemForm from '../components/AddItemForm'
export default {
  name: 'SecondTaskPage',
  components: {
    'canvas-component': Canvas,
    'add-item-form': AddItemForm
  },
  data () {
    return {
      newElement: null
    }
  },
  methods: {
    addElement (dataElement) {
      this.newElement = dataElement
      this.$nextTick(() => {
        this.newElement = null
      })
      // console.log(this.addedElement, 'result')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
