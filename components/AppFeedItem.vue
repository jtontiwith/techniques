<template>
  <li
    :key="technique.id"
    class="py-4 hover:bg-home-blue"
    :class="[large ? 'px-0' : 'px-6']"
  >
    <NuxtLink :to="{ path: toPath, query: { index: index } }">
      <div class="flex justify-between">
        <div class="flex">
          <img
            class="mr-4"
            :class="{ 'h-28': large }"
            :src="url + style[index]"
            alt=""
          />
          <div class="pt-1">
            <p class="font-bold" :class="{ 'text-xl': large }">
              {{ technique.name }}
            </p>
            <p class="mb-1 text-xs" :class="{ 'text-base': large }">
              {{ technique.blurb }}
            </p>
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
              :class="[
                badgeColor(technique.category),
                { 'px-3 py-1 text-sm': large },
              ]"
            >
              {{ technique.category }}
            </span>
          </div>
        </div>
        <slot></slot>
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
    large: {
      type: Boolean,
      required: false,
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
  computed: {
    toPath() {
      return '/techniques/' + this.technique.link
    },
  },
  methods: {
    badgeColor(category) {
      if (category === 'business') return 'bg-purple-100 text-purple-800'
      else if (category === 'personal') return 'bg-blue-100 text-blue-800'
      return 'bg-gray-100 text-gray-800'
    },
  },
}
</script>
