import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select');
const infoEl = document.querySelector('.cat-info');

let breedsList = '';
// let breedName = ''

fetchBreeds().then(data => {
  console.log(data)
  data.forEach(el => {
    breedsList += `<option value="${el.id}">${el.name}-${el.id}</option>`;
  });
  selectEl.insertAdjacentHTML('afterbegin', breedsList);
});

const fetchCat = breedId => {
  console.log(breedId)
  fetchCatByBreed(breedId).then(data => {
    console.log(data);
    data.forEach(el => {

    });
  });
};



selectEl.addEventListener('change', (e => (fetchCat(e.target.value))));
