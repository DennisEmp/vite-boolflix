<script>

export default {
    name: "SingleCard",
    props: {
        info: Object
    },


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
                },
                {
                    img: "img/noflag.png",
                    lang: ""
                },
            ]
        }
    },

    computed: {
            getFlags() {
                for (let i = 0; i < this.flagList.length; i++) {
                    if (this.flagList[i].lang.includes(this.info.original_language)) {
                        return this.flagList[i].img
                    }
                }
                return this.flagList[this.flagList.length - 1].img
            }
        }
}

</script>

<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w500/${info.poster_path}`" alt="" class="poster">
        <div>
            {{ info.title }}
        </div>
        <div class="info-film">
            <div>
                Lingua originale:
                <img :src="getFlags" alt="flags" class="flags"><img>
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

.poster {
        width: 246px;
        height: 330px;
}

.flags {
    width: 22px;
    height: 22px;
}

</style>