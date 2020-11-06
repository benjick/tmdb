<template>
  <div>
    <div v-if="!loading && movies.length === 0">Inga filmer hämtade!</div>
    <div v-else class="columns is-multiline is-mobile">
      <template v-if="loading">
        <MovieSkeleton v-for="n in 9" :key="n" />
      </template>
      <Movie v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    loading: 'movies/getLoadingState',
    movies: 'movies/getMovies',
  }),
}
</script>

<style scoped>
.button {
  margin: 10px;
}
</style>
