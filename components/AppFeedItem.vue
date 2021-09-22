<template>
  <li :key="technique.id" class="px-6 py-4 hover:bg-home-blue">
    <NuxtLink :to="/techniques/ + technique.link">
      <div class="flex justify-between">
        <div class="flex">
          <img class="mr-4" :src="url + style[index]" alt="" />
          <div class="pt-1">
            <p class="font-bold">{{ technique.name }}</p>
            <p class="mb-1 text-xs">{{ technique.blurb }}</p>
            <span
              class="
                inline-flex
                items-center
                px-2.5
                py-0.5
                rounded-full
                text-xs
                font-medium
              "
              :class="badgeColor(technique.category)"
            >
              {{ technique.category }}
            </span>
          </div>
        </div>
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
      </div>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: 'AppFeedItem',
  props: {
    technique: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data: () => ({
    style: [
      'Hand drawn',
      'Flat',
      'Outline',
      'Abstract',
      'Avatar?n=1',
      'Avatar',
      'Hand drawn',
    ],
    url: 'https://doodleipsum.com/80x80/',
  }),
  methods: {
    badgeColor(category) {
      if (category === 'business') return 'bg-purple-100 text-purple-800'
      else if (category === 'personal') return 'bg-blue-100 text-blue-800'
      return 'bg-gray-100 text-gray-800'
    },
  },
}
</script>
