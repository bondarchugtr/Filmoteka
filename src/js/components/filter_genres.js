import { filterGlobalGenres } from './filter_genres'
import { renderGallery, renderMovies } from '../layout/gallery';


let genres = 'Action'

function filterGenre() {
    filterGlobalGenres(genres)
        .then(data => {
            renderMovies(data)
            console.log(data);
        }).catch(() => {
            alert("error");
        });
}

filterGenre()