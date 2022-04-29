import 'regenerator-runtime/runtime'; // polyfilling async/await
import '../sass/main.scss';
import logo from '../img/logo.png';
import { API_URL } from './config.js';
import searchView from './allViews/searchView.js';
import searchResultView from './allViews/searchResultView.js';
import clickedRecipeView from './allViews/clickedRecipeView.js';

export const state = {
  search: '',
  recipesList: [],
  customerPickedRecipe: [],
};

const accomodateObject = async function (searchQuery) {
  try {
    const response = await fetch(`${API_URL}?search=${searchQuery}`);
    const { data } = await response.json();

    for (const datas of data.recipes) {
      state.recipesList.push({
        publisher: datas.publisher,
        image: datas.image_url,
        title: datas.title,
        id: datas.id,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const displayRecipe = async function () {
  try {
    const id = window.location.hash.split('').slice(1).join('');
    const response = await fetch(`${API_URL}/${id}`);
    const { data } = await response.json();
    state.customerPickedRecipe.push(data.recipe);
  } catch (err) {
    console.log(err);
  }
};

const searchRecipes = async function () {
  try {
    state.search = searchView.searchEntry();
    if (!state.search) return;

    await accomodateObject(state.search);

    searchResultView.displayRecipesList();
    clickedRecipeView.clickedFromList(displayRecipe);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  const logoContainer = document.querySelector('.header__logo');
  logoContainer.src = logo;
  searchView.btnPressSearch(searchRecipes);
};
init();
