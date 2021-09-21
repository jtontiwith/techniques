<template>
  <div>
    <h1 class="mb-4 text-lg font-medium">
      Popular Books For Extracting Techniques
    </h1>
    <div class="flex px-2 py-4 bg-white border border-blue-100 rounded">
      <div class="flex">
        <img
          class="block w-auto h-32 mr-4 border-r border-blue-100"
          src="~/assets/atomic_habits.jpeg"
          alt="Workflow"
        />
        <div class="pt-1">
          <p class="text-lg font-bold">Atomic Habits</p>
          <p class="mb-1">Tiny Changes, Remarkable Results</p>
          <div>
            <ul role="list" class="divide-y divide-gray-200">
              <li class="py-4">
                <div class="flex space-x-3">
                  <img
                    class="w-6 h-6 rounded-full"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                    alt=""
                  />
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center justify-between">
                      <h3 class="text-sm font-medium">Lindsay Walton</h3>
                      <p class="text-sm text-gray-500">1h</p>
                    </div>
                    <p class="text-sm text-gray-500">
                      Suggested 7 techniques from this book
                    </p>
                  </div>
                </div>
              </li>

              <!-- More items... -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
