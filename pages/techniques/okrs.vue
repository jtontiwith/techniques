<template>
  <div>
    <ul class="mt-4 text-sm text-gray-400 divide-y divide-gray-200">
      <li
        v-for="(okr, i) in doneOKRs"
        :key="i"
        class="py-2 cursor-pointer"
        @click="hydrateOKR(okr.id)"
      >
        {{ okr.objective }}
      </li>
    </ul>
    <form class="py-6">
      <BaseInput
        v-model="objective"
        label="Objective"
        placeholder="Example: Publish a semi-valuable side project."
      />
      <div v-if="results.length" class="mt-4">
        <div v-for="(r, i) in results" :key="i" class="mt-6">
          <BaseInput
            v-model="results[i]"
            label="Key Result"
            :placeholder="krPlaceholders[i]"
          />
          <p
            v-if="i === 0"
            id="email-description"
            class="mt-2 text-sm text-gray-500"
          >
            Write a metric that will benchmark your progress.
          </p>
        </div>
      </div>
      <div class="flex justify-between py-8">
        <div class="flex items-center">
          <button
            type="button"
            class="inline-flex items-center p-1 text-white bg-indigo-600 border border-transparent rounded-full shadow-sm  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            :disabled="!objective.length"
            @click="incrementResults"
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
          <p class="ml-4 cursor-pointer" @click="incrementResults">
            Add a key result
          </p>
        </div>
        <template v-if="results.length">
          <BaseButton @click.native="addOKR">Done</BaseButton>
        </template>
      </div>
    </form>
  </div>
</template>

<script>
import { addId } from '../../utils/uuid.js'
export default {
  layout: 'Technique',
  data: () => ({
    krPlaceholders: [
      'Work on X 30 minutes before work M-F',
      'Have X 33% done by Y date',
      'Make X number of pitches before quarter end.',
    ],
    objective: '',
    results: [],
    doneOKRs: [],
    activeEditId: null,
  }),
  methods: {
    incrementResults() {
      if (this.results.length < 5) this.results.push('')
    },
    addOKR() {
      if (this.activeEditId) {
        this.updateOKR()
      } else {
        const doneOKR = {
          id: addId(),
          objective: this.objective,
          results: this.results,
        }
        this.doneOKRs.push(doneOKR)
        this.clearFields()
      }
    },
    hydrateOKR(id) {
      const [okrToEdit] = this.doneOKRs.filter((okr) => okr.id === id)
      this.objective = okrToEdit.objective
      this.results = okrToEdit.results
      this.activeEditId = id
    },
    updateOKR() {
      // placeholder stuff here, obviously all this will change when I connect AWS
      const index = this.doneOKRs.findIndex(
        (okr) => okr.id === this.activeEditId
      )
      const obj = {
        objective: this.objective,
        results: this.results,
      }
      Object.assign(this.doneOKRs[index], obj)
      this.activeEditId = null
      this.clearFields()
    },
    clearFields() {
      this.objective = ''
      this.results = []
    },
  },
}
</script>
