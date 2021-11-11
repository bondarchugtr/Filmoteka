// example
// pageRender(mainTittle.home)
// pageRender(mainTittle.my_library_watched)
// pageRender(mainTittle.my_library_queue)

import main from '../../views/layout/main.hbs';
import { refs } from '../refs/refs.js';
import mainTittle from '../data/main.json';
import backdrop_markup from '../../views/components/backdrop.hbs';
import { homeMarkUp, openInput } from '../layout/hero_home';
import modal_markup from '../../views/components/modal.hbs';
import svg from '../../images/svg/sprite.svg';
import { renderGallery } from '../layout/gallery';
import { primaryPagination } from '../components/pagination-list';
import { initGenres } from '../data/genres';
import blockHelpTemplate from '../../views/components/block_help.hbs';



function pageRender(value, heroValue) {
  //backdrop include plugin "modal window"
  const backdropMarkUp = backdrop_markup(modal_markup({ svg }));
  const currentValue = value;
  const blockHelpMarkup = blockHelpTemplate({ svg });
  refs.main.innerHTML = main({ currentValue, backdropMarkUp, heroValue,  blockHelpMarkup });
  if (value.hero_tittle === 'Search Movies') {
    openInput();
  }
  // pagination
  primaryPagination(svg);

}

initGenres();
pageRender(mainTittle.home, homeMarkUp);
renderGallery();
