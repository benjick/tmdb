const apiKey = process.env.TMDB_KEY

async function getMoviesOnPage(page) {
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
  )
  const json = await result.json()
  return json.results
}

async function getTopRated100Movies() {
  const promises = [1, 2, 3, 4, 5].map(getMoviesOnPage)
  const moviesPerPage = await Promise.all(promises)
  return moviesPerPage.flat()
}

// eslint-disable-next-line no-unused-vars
function sleep(ms = 2000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export const state = () => ({
  movies: [],
  loading: false,
})

export const mutations = {
  BEGIN_FETCH_MOVIES(state) {
    state.loading = true
    state.movies = []
  },
  FETCHED_MOVIES(state, movies) {
    state.movies = movies
    state.loading = false
  },
}

export const actions = {
  async fetchMovies({ commit }) {
    commit('BEGIN_FETCH_MOVIES')
    const [result] = await Promise.all([
      getTopRated100Movies(),
      // Simulate loading time
      sleep(),
    ])
    commit('FETCHED_MOVIES', result)
  },
}

export const getters = {
  getMovies(state) {
    return state.movies
  },
  getLoadingState(state) {
    return state.loading
  },
}
