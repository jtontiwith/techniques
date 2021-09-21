export { default as AppCallOut } from '../../components/AppCallOut.vue'
export { default as AppFeed } from '../../components/AppFeed.vue'
export { default as AppMenu } from '../../components/AppMenu.vue'
export { default as AppNav } from '../../components/AppNav.vue'
export { default as AppSideBar } from '../../components/AppSideBar.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
