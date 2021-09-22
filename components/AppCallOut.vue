<template>
  <div>
    <h1 class="mb-4 text-lg font-medium">
      Popular Books For Extracting Techniques
    </h1>
    <div
      class="flex justify-between px-2 py-4 bg-white border border-blue-100 rounded "
    >
      <div class="flex">
        <img
          class="block w-auto h-32 mr-4"
          src="~/assets/atomic_habits.jpeg"
          alt="Workflow"
        />
        <div class="pt-1">
          <p class="text-lg font-bold">Atomic Habits</p>
          <p class="mb-1">Tiny Changes, Remarkable Results</p>
          <div
            class="inline-flex p-1 text-xs bg-white border border-blue-100 rounded cursor-pointer "
          >
            16 Techniques cited
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-between py-2 mr-4">
        <button
          type="button"
          class="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cite a Technique
        </button>
        <button
          type="button"
          class="inline-flex items-center px-6 py-3 text-sm text-white border border-transparent rounded-md shadow-sm  bg-primary-button hover:primary-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Build a Technique
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
