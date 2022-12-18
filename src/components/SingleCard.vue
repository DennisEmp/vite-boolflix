<script >
export default {
    name: "SingleCard",
    props: { 
        info:Object
    }
}
</script>

<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w500/${info.poster_path}`" alt="">
        <div>
            Titolo: {{ info.title }}
        </div>
        <div>
            Lingua originale:{{ info.original_title }}
        </div>
        <div>
        </div>
        <div>
            Voto: {{ info.vote_average }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;
.card {
    width: 250px;
    height: 400px;
    line-height: 25px;
    margin-bottom: 150px;
    border: 1px solid white;
}

img {
        width: 100%;
        height: 100%;
    }
</style>