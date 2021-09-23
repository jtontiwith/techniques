<template>
  <div>
    <div class="flex justify-between mt-8 mb-4">
      <h1 class="text-lg font-medium">Recent Techniques</h1>
      <p class="text-sm cursor-pointer">Popular | Newest</p>
    </div>
    <div class="overflow-hidden bg-white border border-blue-100 rounded">
      <ul role="list" class="divide-y divide-blue-100">
        <AppFeedItem
          v-for="(technique, index) in techniquesdata"
          :key="technique.id"
          :index="index"
          :technique="technique"
        >
          <div
            class="flex flex-col items-center w-16 h-16 p-2 bg-white border border-blue-100 rounded cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <p class="text-sm">add</p>
          </div>
        </AppFeedItem>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppFeed',
  components: {},
  data: () => ({}),
  computed: {
    ...mapState(['techniquesdata']),
  },
}
</script>
