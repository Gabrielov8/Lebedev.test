<template>
  <form @submit.prevent="addElement" class="form">
    <h2 class="form__title">Добавить элемент</h2>
    <v-select
      v-model="addElementForm.type"
      :options="selectOptions"
      required
    />
    <template v-if="showGeneralFields">
      <input
        v-model="addElementForm.x"
        class="form__input"
        type="number"
        placeholder="Введите ось x"
        required
      >
      <input
        v-model="addElementForm.y"
        class="form__input"
        type="number"
        placeholder="Введите ось y"
        required
      >
      <input
        v-if="!showFormAddRectangle"
        v-model="addElementForm.radius"
        class="form__input"
        type="number"
        placeholder="Введите радиус"
        required
      >
      <input
        v-model="addElementForm.fillColor"
        class="form__input"
        type="text"
        placeholder="Введите цвет"
        required
      >
      <input
        v-if="showFormAddStar"
        v-model="addElementForm.radius2"
        class="form__input"
        type="number"
        placeholder="Введите второй радиус"
        required
      >
      <input
        v-if="showFormAddStar"
        v-model="addElementForm.points"
        class="form__input"
        type="number"
        placeholder="Введите количество углов"
        required
      >
      <template v-if="showFormAddRectangle">
        <input
          v-model="addElementForm.width"
          class="form__input"
          type="text"
          placeholder="Введите ширину"
          required
        >
        <input
          v-model="addElementForm.height"
          class="form__input"
          type="text"
          placeholder="Введите высоту"
          required
        >
      </template>
    </template>
    <button
      class="form__btn"
      @click="resetForm"
    >
      Очистить форму
    </button>
    <button
      class="form__btn"
    >
      Добавить
    </button>
  </form>
</template>

<script>
import vSelect from 'vue-select'
export default {
  name: 'AddItemForm',
  components: {
    'v-select': vSelect
  },
  data () {
    return {
      selectOptions: [
        {
          label: 'Круг',
          value: 'circle'
        },
        {
          label: 'Прямоугольник',
          value: 'rectangle'
        },
        {
          label: 'Звезда',
          value: 'star'
        },
        {
          label: 'Треугольник',
          value: 'triangle'
        }
      ],
      addElementForm: {
        type: null,
        radius: null,
        radius2: null,
        points: null,
        x: null,
        y: null,
        width: null,
        height: null,
        fillColor: 'green'
      }
    }
  },
  computed: {
    showFormAddCircle () {
      return this.addElementForm.type?.value === 'circle'
    },
    showFormAddTriangle () {
      return this.addElementForm.type?.value === 'triangle'
    },
    showFormAddStar () {
      return this.addElementForm.type?.value === 'star'
    },
    showFormAddRectangle () {
      return this.addElementForm.type?.value === 'rectangle'
    },
    showGeneralFields () {
      return this.addElementForm.type
    }
  },
  methods: {
    addElement () {
      this.$emit('add-new-element', this.addElementForm)
    },
    resetForm () {
      Object.keys(this.addElementForm).forEach(el => {
        this.addElementForm[el] = null
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1em;
  &__input {
    border: 1px solid rgba(60,60,60,.26);
    border-radius: 4px;
    padding: 0.6em;
  }
  &__btn {
    color: white;
    background-color: #42b983;
    padding: 0.8em;
    border-radius: 4px;
    opacity: .7;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
