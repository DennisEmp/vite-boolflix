import { reactive } from "vue";

export const store = reactive ({
    CharacterList: [],
    apiURL: "https://api.themoviedb.org/3/movie/550?api_key=750d6010d296529b9a43762a8ba0f1c7",
    titolo: "BoolFlix",
    searchText:"",
    apiNameParameter:"name",
});