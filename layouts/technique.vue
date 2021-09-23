<template>
  <div>
    <AppNav />
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <AppBreadCrumbs />
      <ul>
        <AppFeedItem
          :large="true"
          :technique="$store.state.techniquesdata[$route.query.index]"
          :index="$route.query.index"
        >
          may thers a sidebar where it<br />
          shows where the technique came from<br />
          and who developed it, or will that be in the explanation?
        </AppFeedItem>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>
