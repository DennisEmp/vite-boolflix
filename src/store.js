import { reactive } from "vue"

export const store = reactive ({
    apiURL: "https://api.themoviedb.org/3/movie/popular/?api_key=750d6010d296529b9a43762a8ba0f1c7",
    apiSearchMovie: "https://api.themoviedb.org/3/search/multi/?api_key=750d6010d296529b9a43762a8ba0f1c7",
    MovieList: [],
    searchMovie:"",
});