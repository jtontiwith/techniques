<template>
  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-1 pt-6">
      <section v-for="(period, index) in periods" :key="index">
        <h2 class="mb-4 border-b-2 border-fuchsia-600">
          {{ period | capitalize }}
        </h2>
        <ul class="mb-4">
          <li v-for="(habit, i) in habits[period]" :key="i">
            {{ habit.title }}
          </li>
        </ul>
      </section>
    </div>
    <div class="col-span-2">
      <BaseRadio
        :options="['before', 'after']"
        @radio-pick="selectedRadio($event)"
      />
      <BaseSelect
        :habits="defaultHabits"
        @selected-habit="setAdjacentHabit($event)"
      />I will
      <BaseInput v-model="newHabit" placeholder="new habit" />
      <div class="mt-2">
        <BaseButton @click.native="addHabit">Add Habit</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HabitStacking',
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  layout: 'technique',
  data: () => ({
    periods: ['morning', 'day', 'evening'],
    newHabit: '',
    adjacentHabit: null,
    stackPosition: '',
    defaultHabits: [
      {
        time: 'morning',
        title: 'get out of bed',
      },
      {
        time: 'morning',
        title: 'take a shower',
      },
      {
        time: 'morning',
        title: 'brush my teeth',
      },
      {
        time: 'morning',
        title: 'get dressed',
      },
      {
        time: 'morning',
        title: 'drink a cup of coffee',
      },
      {
        time: 'morning',
        title: 'eat breakfast',
      },
      {
        time: 'morning',
        title: 'start my work day',
      },
      {
        time: 'day',
        title: 'eat lunch',
      },
      {
        time: 'day',
        title: 'end the workday',
      },
      {
        time: 'evening',
        title: 'change out of my work clothes',
      },
      {
        time: 'evening',
        title: 'sit down for dinner',
      },
      {
        time: 'evening',
        title: 'sit down for dinner',
      },
      {
        time: 'evening',
        title: 'turn off the lights',
      },
      {
        time: 'evening',
        title: 'get into bed',
      },
    ],
  }),
  computed: {
    habits() {
      const obj = {
        morning: null,
        day: null,
        evening: null,
      }
      for (let i = 0; i < this.periods.length; i++) {
        const period = this.periods[i]
        const arr = this.defaultHabits.filter((h) => h.time === period)
        obj[period] = arr
      }
      return obj
    },
  },
  methods: {
    selectedRadio(e) {
      this.stackPosition = e
    },
    addHabit() {
      const newHabit = {
        time: this.adjacentHabit.time,
        title: this.newHabit,
      }
      const index = this.defaultHabits.findIndex(
        (h) => h.title === this.adjacentHabit.title
      )
      this.stackPosition === 'before'
        ? this.defaultHabits.splice(index, 0, newHabit)
        : this.defaultHabits.splice(index + 1, 0, newHabit)
      // this.defaultHabits.push(newHabit)
    },
    setAdjacentHabit(e) {
      const { time, title } = e
      this.adjacentHabit = {
        time,
        title,
      }
    },
  },
}
</script>
