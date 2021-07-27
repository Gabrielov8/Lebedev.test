<template>
  <canvas
    class="canvas"
    :id="canvasId"
    @mousedown="mouseDown"
  />
</template>

<script>
import { PaperScope, Tool, Path, Point } from 'paper'
import { quantityElements, rectangle, circle, star, triangle } from '../services/default-data'
export default {
  name: 'Canvas',
  props: {
    canvasId: {
      type: String,
      required: true
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
    createTriangle (fillColor, firstPoint, secondPoint, thirdPoint) {
      const triangle = new Path()
      triangle.add(new Point(firstPoint))
      triangle.add(new Point(secondPoint))
      triangle.add(new Point(thirdPoint))
      triangle.closed = true
      triangle.fillColor = fillColor
      return triangle
    },
    createStar (fillColor, x, y, points, radius1, radius2) {
      return new Path.Star({
        center: new Point(x, y),
        points,
        radius1,
        radius2,
        fillColor
      })
    },
    createRectangle (fillColor, x, y, width, height) {
      return new Path.Rectangle({
        x,
        y,
        width,
        height,
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
      for (let i = 0; i < quantityElements; i++) {
        const randomColor = {
          hue: Math.random() * 360,
          saturation: 1,
          lightness: (Math.random() - 0.5) * 0.4 + 0.3
        }
        this.createCircles(
          randomColor,
          this.getRandomNumber(this.scope.view.size.width),
          this.getRandomNumber(this.scope.view.size.height),
          circle.radius
        )
        this.createRectangle(
          randomColor,
          this.getRandomNumber(this.scope.view.size.width),
          this.getRandomNumber(this.scope.view.size.height),
          rectangle.width,
          rectangle.height
        )
        this.createTriangle(
          randomColor,
          triangle.firstPoint,
          triangle.secondPoint,
          triangle.thirdPoint
        )
        this.createStar(
          randomColor,
          this.getRandomNumber(this.scope.view.size.width),
          this.getRandomNumber(this.scope.view.size.height),
          star.points,
          star.radius1,
          star.radius2
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
  //background-color: black;
}
</style>
