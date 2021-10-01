<template>
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700"
      >Objective</label
    >
    <div class="mt-1">
      <input
        id="email"
        type="text"
        name="email"
        class="block w-full border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Example: Publish a semi-valuable side project."
        aria-describedby="email-description"
      />
    </div>
    <p id="email-description" class="mt-2 text-sm text-gray-500">
      Write a goal that specifies what you want to achieve.
    </p>
  </div>
</template>

<script>
export default {}
</script>
