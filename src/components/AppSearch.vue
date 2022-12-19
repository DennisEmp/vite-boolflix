<script>

import { store } from '../store.js'


export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    }
}
</script>


<template>
    <div class="container d-flex justify-content-end py-3">
        <div>
            <label for="search-character" class="visually-hidden"> Search Character </label>
            <input type="text" class="form-controll" id="search-Film" placeholder="Search Film" v-model="store.searchMovie" />
        </div>
        <div>
            <button type="submit" class="btn btn-outline-danger mb-2" @click.prevent="$emit('searchTitle')"> Search </button>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.form-controll {
    padding-left: 10px;
}
.btn {
    height: 28px;
    margin-left: 10px;
}
</style>