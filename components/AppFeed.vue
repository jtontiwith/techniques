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
        />
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
