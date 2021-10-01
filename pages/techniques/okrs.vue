<template>
  <form class="py-6">
    <label for="email" class="block text-sm font-medium text-gray-700"
      >Objective</label
    >
    <div class="mt-1">
      <input
        id="email"
        type="text"
        name="email"
        class="block w-full border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Example: Publish a semi-valuable side project."
        aria-describedby="email-description"
      />
    </div>
    <p id="email-description" class="mt-2 text-sm text-gray-500">
      Write a goal that specifies what you want to achieve.
    </p>
    <div v-if="keyResults" class="mt-4">
      <div v-for="(k, i) in keyResults" :key="i" class="mt-6">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Key Result</label
        >
        <div class="mt-1">
          <input
            id="email"
            type="text"
            name="email"
            class="block w-full border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            :placeholder="krPlaceholders[i]"
            aria-describedby="email-description"
          />
        </div>
        <p
          v-if="i === 0"
          id="email-description"
          class="mt-2 text-sm text-gray-500"
        >
          Write a metric that will benchmark your progress.
        </p>
      </div>
    </div>
    <div class="flex items-center py-8">
      <button
        type="button"
        class="inline-flex items-center p-1 text-white bg-indigo-600 border border-transparent rounded-full shadow-sm  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="incrementKRs"
      >
        <!-- Heroicon name: solid/plus-sm -->
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <p class="ml-4">Add a key result</p>
    </div>
  </form>
</template>

<script>
export default {
  layout: 'Technique',
  data: () => ({
    keyResults: 0,
    krPlaceholders: [
      'Work on X 30 minutes before work M-F',
      'Have X 33% done by Y date',
      'Make X number of pitches before quarter end.',
    ],
  }),
  methods: {
    incrementKRs() {
      this.keyResults++
    },
  },
}
</script>
