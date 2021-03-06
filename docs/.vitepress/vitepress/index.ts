import VPApp from './components/vp-app.vue'
import VPDemo from './components/vp-demo.vue'
import type { Component } from 'vue'

export default VPApp
export const globals: [string, Component][] = [
  ['Demo', VPDemo],
  // ['MainColor', MainColor],
  // ['NeutralColor', NeutralColor],
  // ['SecondaryColors', SecondaryColors],
  // ['IconList', IconList],
  // ['Changelog', Changelog],
  // ['ParallaxHome', ParallaxHome],
  // ['Resource', Resource],
]
