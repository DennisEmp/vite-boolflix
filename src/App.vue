<script>
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import axios from 'axios'

// implement
export default {
  components: {
    AppHeader,
    AppMain,
},
  data() {
    return {
      store,
    }
  },

  methods: {
    getMovies() {
      let urlSearch = store.apiURL;
      // COND 
      if (store.searchMovie !== "") {
       urlSearch = `${store.apiSearchMovie}&query=${store.searchMovie}`
      }
      axios
        .get(urlSearch)
        .then(res => {
          store.MovieList = res.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getMovies();
  }
}
</script>

<template>
<div class="contianerHeader">
  <AppHeader @searchTitle="getMovies" />
</div>
<div class="containerMain">
  <AppMain />
</div>
</template>

<style lang="scss">
  @use './style/general.scss' as *;
</style>
