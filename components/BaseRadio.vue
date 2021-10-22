<template>
  <fieldset>
    <legend class="sr-only">Radio Buttons</legend>
    <div class="flex">
      <!-- Active: "ring-1 ring-offset-2 ring-indigo-500" -->
      <label
        v-for="(option, index) in options"
        :key="index"
        class="relative block px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer  hover:border-gray-400 sm:flex sm:justify-between focus:outline-none"
      >
        <input
          v-model="selectedRadio"
          type="radio"
          name="server-size"
          :value="option"
          class="sr-only"
          aria-labelledby="server-size-0-label"
          aria-describedby="server-size-0-description-0 server-size-0-description-1"
          @change="$emit('radio-pick', $event.target.value)"
        />
        <p class="font-medium text-gray-900">{{ option }}</p>
        <div
          class="absolute border-2 rounded-lg pointer-events-none -inset-px"
          :class="[
            option === selectedRadio
              ? 'border-indigo-500'
              : 'border-transparent',
          ]"
          aria-hidden="true"
        ></div>
      </label>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'BaseRadio',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    selectedRadio: '',
  }),
}
</script>
