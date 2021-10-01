<template>
  <div class="bg-white border-b border-blue-100 h-28 mb-7">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <AppFeedItem
        :technique="$store.state.techniquesdata[index]"
        :index="index"
        :small="true"
      >
        <div><BaseButton> ADD TO STACK </BaseButton></div>
      </AppFeedItem>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTechniqueTopBar',
  computed: {
    index() {
      return parseInt(this.$route.query.index)
    },
  },
}
</script>
