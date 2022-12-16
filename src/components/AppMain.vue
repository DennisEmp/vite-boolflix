<script>
import { store } from "../store.js";
import SingleCard from './SingleCard.vue';

export default {
  components: {
    SingleCard
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>

  <section class="container"> 
    <SingleCard v-for="(movie,index) in store.MovieList" :key="index" :info="movie" />
  </section>

</template>

<style scoped>

</style>
