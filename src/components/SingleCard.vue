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


<div class="card">
    <div class="card-info">
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
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

// .flags {
//     width: 15px;
//     height: 15px;
// }

// .star {
//     display: flex;
// }

// .title {
//     text-align: center;
//     font-size: 14px;
// }

// .info-film {
//     font-size: 10px;
// }


.card {
 width: 190px;
 height: 254px;
 border-radius: 1em;
 padding: 1.9rem;
 background: #f5f5f5;
 position: relative;
 display: flex;
 align-items: flex-end;
 transition: 0.4s ease-out;
 box-shadow: 0px 7px 20px rgba(43, 8, 37, 0.2);
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
 position: relative;
 z-index: 3;
 color: #f5f5f5;
 opacity: 0;
 transform: translateY(20%);
 transition: 0.5s;
}

/*Text*/
.text-title {
 font-size: 1.5rem;
 font-weight: 500;
}

.text-body {
 letter-spacing: 1px;
 font-size: 0.9rem;
 margin: 5px 0 15px 0;
}


/*Image*/


/*Hover*/
.card:hover {
 transform: translateY(5%);
}

.card:hover:before {
 opacity: 1;
}

.card:hover .card-info {
 opacity: 1;
 transform: translateY(0);
}

.card-button:hover {
 background: rgba(218, 77, 77, 0.4);
 color: #f5f5f5;
}
</style>