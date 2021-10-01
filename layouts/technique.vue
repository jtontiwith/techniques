<template>
  <div>
    <ul>
      <AppTechniqueTopBar />
    </ul>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <AppBreadCrumbs />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Technique',
}
</script>
