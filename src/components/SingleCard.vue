<script>

export default {
    name: "SingleCard",
    props:  ["info"],
}

data() {
    return {
        flagList: [
            {
                img: "img/it.png",
                lang: "it"
            },
            {
                img: "img/fr.png",
                lang: "fr"
            },
            {
                img: "img/uk.png",
                lang: "en"
            },
            {
                img: "img/es.png",
                lang: "es"
            },
            {
                img: "img/de.png",
                lang: "de"
            },
            {
                img: "img/ch.png",
                lang: "ch"
            },
            {
                img: "img/usa.png",
                lang: "usa"
            },
            {
                img: "img/ru.png",
                lang: "ru"
            }
            {
                img: "img/noflag.png",
                lang: "nocountry"
            }
        ]
    }
};
</script>

<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w500/${info.poster_path}`" alt="">
        <div>
            {{ info.title }}
        </div>
        <div class="info-film">
            <div>
                Lingua originale:{{ info.original_language }}
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
}

img {
        width: 246px;
        height: 330px;
    }

</style>