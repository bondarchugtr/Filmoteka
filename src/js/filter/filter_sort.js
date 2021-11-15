import { renderGallery } from '../layout/gallery';
import filter from '../../views/components/filter/filter_sort.hbs';
const main = document.querySelector('.hero');

function filterMain() {
    const markup = filter()
    main.insertAdjacentHTML("beforeend", markup);
}

filterMain();

const filterList = document.querySelector('.filter-list__sort');
filterList.addEventListener('click', onRenderFilter)

function onRenderFilter(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'LI') {
        return;
    }
    const link = evt.target.dataset.atribute;
    renderGallery('sort', '', link);
};

const linkOpenSort = document.querySelector('.filter-link__sort')
linkOpenSort.addEventListener('click', onOpenListSorts)
const listOpenSort = document.querySelector('.filter-list__sort')

function onOpenListSorts(evt) {
    evt.preventDefault()

    if (evt.target === linkOpenSort) {
        console.log(evt.target === linkOpenSort);
        listOpenSort.classList.toggle('open')
    } else {
        listOpenSort.classList.remove('open')
    }

}
