<template>
  <div
    class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen"
  >
    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
    <p>{{ movie.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
}
</script>

<style scoped>
img {
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.15);
}
</style>
