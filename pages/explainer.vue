<template>
  <div>
    <div>explainer here</div>
    <p>{{ technique.what }}</p>
    <p>{{ technique.examples }}</p>
    <p>{{ technique.benefits }}</p>
  </div>
</template>

<script>
export default {
  layout: 'TechniqueExplainer',
  computed: {
    technique() {
      return this.$store.state.techniquesdata[this.$route.query.index]
        .description
    },
  },
}
</script>
