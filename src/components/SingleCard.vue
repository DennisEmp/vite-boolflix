<script >
export default {
    name: "SingleCard",
    props:  ["info"],
}
</script>

<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w500/${info.poster_path}`" alt="">
        <div>
            {{ info.title }}
        </div>
        <div class="info-film">
            <div>
                Lingua originale:{{ info.original_title }}
            </div>
            <div>
            </div>
            <div>
                Voto: {{ info.vote_average }}
            </div>
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
    margin-bottom: 55px;
    border: 1px solid white;
}

img {
        width: 246px;
        height: 330px;
    }

</style>