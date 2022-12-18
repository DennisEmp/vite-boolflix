<script>
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppSearch from "./components/AppSearch.vue";
import axios from 'axios'

export default {
  components: {
    AppHeader,
    AppMain,
    AppSearch
},
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovies() {
      axios
        .get(store.apiURL)
        .then(res => {
          store.MovieList = res.data;
        })
        .catch(err => {
          console.log("ERRORI", err);
        }
        );
    }
  },
  mounted() {
    this.getMovies();
  }
}
</script>

<template>
<div class="contianerHeader">
  <AppHeader />
</div>
<div class="containerSearch">
  <AppSearch />
</div>
<div class="containerMain">
  <AppMain />
</div>
</template>

<style lang="scss">
  @use './style/general.scss' as *;
</style>
