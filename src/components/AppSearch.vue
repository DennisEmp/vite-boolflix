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
    <div class="search-cont">
        <div>
            <label for="search-character" class="visually-hidden"> Search Character </label>
            <input type="text" class="form-controll" id="search-Film" placeholder="Search Film" v-model="store.searchMovie" />
        </div>
        <button class="cta" type="submit" @click.prevent="$emit('searchTitle')">
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
}
.form-controll {
    padding-left: 10px;
}

.cta {
 position: relative;
 padding: 12px 18px;
 transition: all 0.2s ease;
 border: none;
 background: none;
}

.cta:before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 display: block;
 border-radius: 50px;
 background: #e50914;
 width: 45px;
 height: 45px;
 transition: all 0.3s ease;
}

.cta span {
 position: relative;
 font-size: 18px;
 font-weight: 700;
 letter-spacing: 0.05em;
 color:#fff;
}

.cta svg {
 position: relative;
 top: 0;
 margin-left: 10px;
 fill: none;
 stroke-linecap: round;
 stroke-linejoin: round;
 stroke: #234567;
 stroke-width: 2;
 transform: translateX(-5px);
 transition: all 0.3s ease;
}

.cta:hover:before {
 width: 100%;
 background: #ff2222;
}

.cta:hover svg {
 transform: translateX(0);
}

.cta:active {
 transform: scale(0.95);
}
</style>