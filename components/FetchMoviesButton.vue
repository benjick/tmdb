<template>
  <button class="button is-primary" :disabled="loading" @click="fetchMovies">
    Hämta filmer
  </button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    loading: 'movies/getLoadingState',
  }),
  methods: {
    ...mapActions({
      fetchMovies: 'movies/fetchMovies',
    }),
  },
}
</script>

<style scoped>
.button {
  margin: 10px;
}
</style>
