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
        <img :src="`https://image.tmdb.org/t/p/w200/${info.poster_path}`" alt="">
        <div>
            Titolo: {{ info.title }}
        </div>
        <div>
            Lingua originale:{{ info.original_title }}
        </div>
        <div>
            Lingua:{{ info.original_language }}
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
    text-align: center;
}
</style>