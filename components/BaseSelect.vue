<template>
  <div>
    <label id="listbox-label" class="block text-sm font-medium text-gray-700">
    </label>
    <div class="relative mt-1">
      <button
        type="button"
        class="relative w-full py-3 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-sm shadow-sm cursor-default  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        @click="toggleList"
      >
        <span class="block truncate"> {{ selectedOption }} </span>
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none "
        >
          <!-- Heroicon name: solid/selector -->
          <svg
            class="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>

      <ul
        v-show="expanded"
        class="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg  max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        <li
          v-for="(habit, index) in habits"
          id="listbox-option-0"
          :key="index"
          class="relative py-2 pl-3 cursor-default select-none pr-9"
          :class="[
            habit.title === hoveredOption
              ? 'text-white bg-indigo-600'
              : 'text-gray-900',
          ]"
          role="option"
          @mouseover="optionHovered(habit)"
        >
          <span class="block font-normal truncate" @click="selectOption(habit)">
            {{ habit.title }}
          </span>

          <span
            v-if="habit.title === selectedOption"
            class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 "
          >
            <!-- Heroicon name: solid/check -->
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    habits: {
      type: Array,
      default: () => ['no habits'],
    },
  },
  data: () => ({
    expanded: false,
    selectedOption: '',
    hoveredOption: 'yo',
  }),
  mounted() {
    this.selectedOption = this.habits[0].title
  },
  methods: {
    toggleList() {
      this.expanded = !this.expanded
    },
    selectOption(option) {
      this.$emit('selected-habit', option)
      this.selectedOption = option.title
      this.expanded = false
    },
    optionHovered(option) {
      this.hoveredOption = option.title
    },
  },
}
</script>
