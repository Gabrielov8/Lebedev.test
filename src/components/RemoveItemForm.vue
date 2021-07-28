<template>
  <section class="section">
    <h2 class="section__title">Удалить элемент</h2>
    <ul v-if="showElementsList">
      <li
        v-for="(element, index) in elements"
        :key="index"
        class="element"
      >
        <span>{{ index + 1 }}</span>
        <p>{{ element.type.label }}</p>
        <button @click="removeItem(index, element.id)">Удалить элемент</button>
      </li>
    </ul>
    <p
      v-else
      class="section__err"
    >
      Удалять пока нечего ;)
    </p>
  </section>
</template>

<script>
export default {
  name: 'RemoveItemForm',
  props: {
    newElement: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      elements: []
    }
  },
  watch: {
    newElement: function (element) {
      if (element) {
        const newElem = Object.assign({}, element)
        this.elements.push(newElem)
      }
    }
  },
  computed: {
    showElementsList () {
      return this.elements.length > 0
    }
  },
  methods: {
    removeItem (elementIndex, id) {
      this.$emit('remove-item', id)
      this.elements.splice(elementIndex, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  &__title {
    text-align: center;
  }
  &__err {
    padding: 2em;
    text-align: center;
    font-weight: 600;
    font-size: 1.3em;
  }
}

.element {
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
  justify-content: space-between;
  padding: 0 2em;
}
</style>
