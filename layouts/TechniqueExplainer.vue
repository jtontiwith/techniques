<template>
  <div>
    <AppNav />
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <ul class="mb-6 border-b border-blue-100">
        <AppFeedItem
          :large="true"
          :technique="$store.state.techniquesdata[index]"
          :index="index"
        >
          <div>
            <div>
              <NuxtLink
                :to="{
                  path: `/techniques/${$store.state.techniquesdata[index].link}`,
                  query: { index: index },
                }"
                ><BaseButton> TRY IT </BaseButton></NuxtLink
              >
              <BaseButton> ADD TO STACK </BaseButton>
            </div>
            <div class="py-2">
              <div
                class="inline-flex px-2 text-sm border border-blue-100  bg-badge-blue"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                  />
                </svg>
                <cite class="not-italic">High Output Management</cite>
              </div>
              <BaseAvatar />
            </div>
          </div>
        </AppFeedItem>
      </ul>
      <AppBreadCrumbs />
      <h1 class="mt-10 text-5xl">
        Quick Guide to
        {{ $store.state.techniquesdata[index].link }}
      </h1>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechniqueExplainer',
  computed: {
    index() {
      return parseInt(this.$route.query.index)
    },
  },
}
</script>
