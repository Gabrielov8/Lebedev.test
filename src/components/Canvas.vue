<template>
  <canvas
    class="canvas"
    :id="canvasId"
    @mousedown="mouseDown"
  />
</template>

<script>
import { PaperScope, Tool, Path, Point } from 'paper'
import { quantityElements, rectangle, circle, star } from '../services/default-data'
export default {
  name: 'Canvas',
  props: {
    canvasId: {
      type: String,
      required: true
    },
    newElement: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      scope: '',
      hitOptions: {
        segments: true,
        stroke: true,
        fill: true,
        tolerance: 5
      }
    }
  },
  watch: {
    newElement: {
      handler: function (element) {
        if (element) {
          switch (element.type?.value) {
            case 'circle':
              this.createCircles(element.fillColor, Number(element.x), Number(element.y), Number(element.radius))
              break
            case 'triangle':
              this.createTriangle(element)
              break
            case 'star':
              this.createStar(element.fillColor, Number(element.x), Number(element.y), Number(element.points), Number(element.radius),
                Number(element.radius2))
              break
            case 'rectangle':
              this.createRectangle(element.fillColor, element.x, element.y, element.width, element.height)
              break
          }
        }
      }
    }
  },
  methods: {
    getRandomNumber (max, min = 0) {
      return Math.random() * (max - min) + min
    },
    initCanvas () {
      this.scope = new PaperScope()
      this.scope.setup(this.canvasId)
    },
    createTool (scope) {
      scope.activate()
      return new Tool()
    },
    createTriangle ({
      fillColor,
      x,
      y,
      radius
    }) {
      const center = new Point(x, y)
      const side = 3
      const triangle = new Path.RegularPolygon(center, side, radius)
      triangle.fillColor = fillColor
      return triangle
    },
    createStar (fillColor, x, y, points, radius, radius2) {
      return new Path.Star({
        center: new Point(x, y),
        points,
        radius1: radius,
        radius2,
        fillColor
      })
    },
    createRectangle (fillColor, x, y, width, height) {
      return new Path.Rectangle({
        x: Number(x),
        y: Number(y),
        width: Number(width),
        height: Number(height),
        fillColor
      })
    },
    createCircles (fillColor, x, y) {
      return new Path.Circle({
        center: [x, y],
        radius: 20,
        fillColor
      })
    },
    mouseDown () {
      const tool = this.createTool(this.scope)
      let path = null
      tool.onMouseDown = (event) => {
        const hitResult = this.scope.project.hitTest(event.point, this.hitOptions)
        if (hitResult) {
          path = hitResult.item
        } else {
          path = null
          return
        }
        const movePath = hitResult.type === 'fill'
        if (movePath) {
          this.scope.project.activeLayer.addChild(hitResult.item)
        }
      }
      tool.onMouseDrag = (event) => {
        if (path) {
          path.position.x = path.position.x + event.delta.x
          path.position.y = path.position.y + event.delta.y
        }
      }
      tool.onMouseMove = (event) => {
        this.scope.project.activeLayer.selected = false
        if (event.item) {
          event.item.selected = true
        }
      }
    },
    createDefaultElements () {
      if (this.$route.name !== 'FirstTask') {
        return
      }
      for (let i = 0; i < quantityElements; i++) {
        const randomColor = {
          hue: Math.random() * 360,
          saturation: 1,
          lightness: (Math.random() - 0.5) * 0.4 + 0.6
        }
        this.createCircles(
          randomColor,
          this.getRandomNumber(this.scope.view.size.width),
          this.getRandomNumber(this.scope.view.size.height),
          this.getRandomNumber(circle.radius)
        )
        this.createRectangle(
          randomColor,
          this.getRandomNumber(this.scope.view.size.width),
          this.getRandomNumber(this.scope.view.size.height),
          rectangle.width,
          rectangle.height
        )
        this.createTriangle({
          fillColor: randomColor,
          x: this.getRandomNumber(this.scope.view.size.width),
          y: this.getRandomNumber(this.scope.view.size.height),
          radius: this.getRandomNumber(30, 10)
        })
        this.createStar(
          randomColor,
          this.getRandomNumber(this.scope.view.size.width),
          this.getRandomNumber(this.scope.view.size.height),
          star.points,
          star.radius,
          this.getRandomNumber(star.radius2, 15)
        )
      }
    }
  },
  mounted () {
    this.initCanvas()
    this.createDefaultElements()
  }
}
</script>

<style lang="scss" scoped>
.canvas {
  width: 100%;
  height: 300px;
  border: 1px solid $main-dark-color;
  border-radius: 5px;
  //background-color: $main-dark-color;
  background-color: black;
}
</style>
