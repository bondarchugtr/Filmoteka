import modal_one_movie_markup from '../../views/partials/modal_one_movie.hbs';
import { renderModal } from '../components/modal';
import { renderParamsCard } from '../components/fetch'


let id = "id";
let linksID = [];

const test = document.querySelector('.modal__content')

function renderParamCard(data) {
  const marcup = modal_one_movie_markup(data);
  test.innerHTML = marcup;
}

function renderMovieSeorchParam() {
  renderParamsCard(id)
    .then((data) => {
      renderModal()
      renderParamCard(data)
    })
    .catch(() => {
    });
}
const imagesRef = document.querySelector('.gallery-list li');
console.log(imagesRef);

function seorchId() {
  const imagesRef = document.querySelector('.gallery-list');
  imagesRef.addEventListener('click', e => {
    e.preventDefault()
    console.log(e.target.parentNode);
    if (e.target.nodeName === 'UL') {
      console.log('Выход');
      return;
    }
    // id = e.target.closest('.gallery-list__item').dataset.id;
    console.log(id)
    renderMovieSeorchParam(id)
  })
}
seorchId()