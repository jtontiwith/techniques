<template>
  <div>
    <AppNav />
    <div class="h-screen bg-blue-light">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-3 gap-8">
          <div class="col-span-3 xl:col-span-2">
            <Nuxt />
          </div>
          <div class="hidden col-span-1 xl:block">
            <AppSideBar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue'
import AppSideBar from '@/components/AppSideBar.vue'
export default {
  components: {
    AppNav,
    AppSideBar,
  },
}
</script>
