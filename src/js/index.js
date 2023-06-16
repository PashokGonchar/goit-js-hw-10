import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select');
const infoEl = document.querySelector('.cat-info');

let breedsList = '';

fetchBreeds().then(data => {
  // console.log(data)
  data.forEach(el => {
    breedsList += `<option value="${el.id}">${el.name}-${el.id}</option>`;
  });
  selectEl.insertAdjacentHTML('afterbegin', breedsList);
});

const fetchCat = (e) => {
  console.log(e.target.value);
  fetchCatByBreed(e.target.value).then(data => {
    console.log(data);
  });
};
  
selectEl.addEventListener('change', fetchCat);
