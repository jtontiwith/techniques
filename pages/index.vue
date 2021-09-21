<template>
  <div>
    <AppCallOut />
    <AppFeed />
  </div>
</template>

<script>
import AppFeed from '@/components/AppFeed.vue'
import AppCallOut from '@/components/AppCallOut.vue'
export default {
  layout: 'home',
  AppFeed,
  AppCallOut,
}
</script>
