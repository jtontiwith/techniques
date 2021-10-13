<template>
  <div>
    <label for="email" class="block font-bold text-gray-700">{{ label }}</label>
    <div class="mt-1">
      <input
        id="email"
        type="text"
        name="email"
        class="block w-full py-3 placeholder-gray-300 border-gray-300 rounded-sm shadow-sm  focus:ring-indigo-500 focus:border-indigo-500"
        :placeholder="placeholder"
        aria-describedby="email-description"
        :value="value"
        v-bind="$attrs"
        v-on="inputListeners"
      />
    </div>
    <!--<p id="email-description" class="mt-2 text-sm text-gray-500">
      Write a goal that specifies what you want to achieve.
    </p>-->
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: 'label',
    },
    placeholder: {
      type: String,
      default: 'default placeholder',
    },
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputListeners() {
      const vm = this
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input(event) {
            vm.$emit('input', event.target.value)
          },
        }
      )
    },
  },
}
</script>
