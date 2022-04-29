import { state } from '../controller.js';

class SearchResults {
  parentEl = document.querySelector('.search-results');

  displayRecipesList() {
    const recipesListContainer = this.parentEl.querySelector('.results');
    state.recipesList.forEach(function (el) {
      const recipeItem = `
        <li class="preview">
          <a class="preview__link preview__link--active" href="#${el.id}">
            <figure class="preview__fig">
              <img src="${el.image}" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${el.title}</h4>
              <p class="preview__publisher">${el.publisher}</p>
              <div class="preview__user-generated">
                <svg>
                  <use href="#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
      `;
      recipesListContainer.insertAdjacentHTML('afterbegin', recipeItem);
    });
  }
}
export default new SearchResults();
