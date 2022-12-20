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
        cardStyle() {
            // return { background: 'red' }
            return { "background-image":`url(https://image.tmdb.org/t/p/w500/${this.info.poster_path})`}
        },
            getFlags() {
                for (let i = 0; i < this.flagList.length; i++) {
                    if (this.flagList[i].lang.includes(this.info.original_language)) {
                        return this.flagList[i].img
                    }
                }
                return this.flagList[this.flagList.length - 1].img
            },
            StarRatings () {
                return Math.round(this.info.vote_average / 2);
            } 
        }
}

</script>

<template>
    <!-- <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w500/${info.poster_path}`" alt="" class="poster">
        <div class="title">
            {{ info.title }}
        </div>
        <div class="info-film">
            <div>
                Lingua Originale:
                <img :src="getFlags" alt="flags" class="flags"><img>
            </div>
            <div class="stars">
                    <div class="d-flex gap-1">
                        <span>Voto:</span>
                        <div v-for="star in StarRatings">
                            <font-awesome-icon icon="fa-solid fa-star" />
                        </div>
                        <div v-for="star in 5 - StarRatings">
                            <font-awesome-icon icon="fa-regular fa-star" />
                        </div>
                    </div>
            </div>
        </div>
    </div> -->


    <div class="card" :style="cardStyle">
        <div class="card-info">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path></svg>           
            <p class="text-title"> {{ info.title }} </p>
            <div class="text-body">
                <div class="info-film">
                    <div>
                        Lingua Originale:
                        <img :src="getFlags" alt="flags" class="flags"><img>
                    </div>
                    <div class="stars">
                        <div class="d-flex gap-1">
                            <span>Voto:</span>
                            <div v-for="star in StarRatings">
                                <font-awesome-icon icon="fa-solid fa-star" />
                            </div>
                            <div v-for="star in 5 - StarRatings">
                                <font-awesome-icon icon="fa-regular fa-star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;
// .card {
//     width: 250px;
//     height: 430px;
//     line-height: 25px;
//     margin-bottom: 55px;
// }

// :hover {
//     background-color: red;
// }

// .poster {
//         width: 246px;
//         height: 330px;
// }

.flags {
    width: 20px;
    height: 20px;
}

// .star {
//     display: flex;
// }

// .title {
//     text-align: center;
//     font-size: 14px;
// }

.info-film {
    font-size: 12px;
    color: #fff;
}


.card {
 width: 251px;
 height: 376px;
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: 0.4s ease-out;
 box-shadow: 0px 7px 20px rgba(43, 8, 37, 0.3);
 background-size: contain;
}

.card:before {
 position: absolute;
 top: 0;
 left: 0;
 display: block;
 width: 100%;
 height: 100%;
 z-index: 2;
 transition: 0.5s;
}

.card-info {
 width: 251px;
 height: 376px;
 border-radius: 5px;
 position: relative;
 z-index: 3;
 color: #f5f5f5;
 opacity: 0;
 transform: translateY(20%);
 transition: 0.3s;
 background-color: rgba(0, 0, 0, 0.5);
 opacity: 0%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding: 20px;
}

/*Text*/
.text-title {
 font-weight: 500;
 font-size: 20px;
 color: white;
}

.text-body {
 letter-spacing: 1px;
 font-size: 0.9rem;
 margin: 5px 0 15px 0;
}


/*Image*/


/*Hover*/
.card:hover {
 transform: translateY(3%);
}

.card:hover:before {
 opacity: 1;
}

.card:hover .card-info {
 opacity: 1;
 transform: translateY(0);
}


</style>