<!-- <script>

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
    <div class="search-cont">
        <div>
            <label for="search-character" class="visually-hidden"> Search Character </label>
            <input type="text" class="form-controll" id="search-Film" placeholder="Search Film" v-model="store.searchMovie" />
        </div>
        <button type="submit" @click.prevent="$emit('searchTitle')">
            <span>Search</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </button>
        <!-- <div>
            <button type="submit" @click.prevent="$emit('searchTitle')"> Search </button>
        </div> -->
    </div>   
</template>


<style lang="scss" scoped>
.search-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1320px;
    gap: 12px;
}
.form-controll {
    padding-left: 10px;
}

button {
 border: none;
 color: #fff;
 background-image: linear-gradient(30deg, hsl(0, 100%, 50%), hsl(0, 100%, 22%));
 border-radius: 20px;
 background-size: 100% auto;
 font-family: inherit;
 font-size: 12px;
 padding: 0.6em 1.5em;
}

button:hover {
 background-position: right center;
 background-size: 200% auto;
 -webkit-animation: pulse 2s infinite;
 animation: pulse512 1.5s infinite;
}

@keyframes pulse512 {
 0% {
  box-shadow: 0 0 0 0 hsl(0, 100%, 50%);
 }

 70% {
  box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
 }

 100% {
  box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
 }
}
</style> -->