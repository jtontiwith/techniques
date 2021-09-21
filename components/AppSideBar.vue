<template>
  <div>
    <h1 class="mb-4 text-lg font-medium">Upcomming Techniques</h1>
    <div class="bg-white border border-blue-100 rounded">
      <ul role="list" class="px-4 divide-y divide-gray-200">
        <li v-for="item in sidebarData" :key="item.id" class="px-6 py-4">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['sidebarData']),
  },
}
</script>

<style lang="scss" scoped></style>
