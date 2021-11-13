import { filterGlobalGenres } from './filter_genres'
import { renderGallery, renderMovies } from '../layout/gallery';
import RenderFilterGenres from '../../views/components/filter_genres.hbs'


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

// filterGenre()


function filterGenres(data) {
    const marcup = filter(data)
    console.log(marcup);
    main.insertAdjacentHTML("beforeend", marcup);
}
// filterMain()