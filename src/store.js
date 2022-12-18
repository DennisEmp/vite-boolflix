import { reactive } from "vue"

export const store = reactive ({
    // apiURL: "https://api.themoviedb.org/3/movie/popular/?api_key=750d6010d296529b9a43762a8ba0f1c7",
    // MovieList: [],

    apiURL: "https://api.themoviedb.org/3/movie/popular/?api_key=a74482a62c6a03ab305fe588e15c57e3",
    apiSearchMovie: "https://api.themoviedb.org/3/search/movie/?api_key=a74482a62c6a03ab305fe588e15c57e3",
    MovieList: [],
    searchMovie: "",
});