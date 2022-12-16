<script>
import AppSearch from '../components/AppSearch.vue';
import List from '../components/List.vue';
import axios from 'axios';
import { store } from "../store.js";


export default {
  components: {
    AppSearch,
    List
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
    <div class="container">

    </div>
</template>

<style scoped>
</style>
