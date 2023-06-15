import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select');
const infoEl = document.querySelector('.cat-info');

let breedsList = '';
let nameCat = ''

fetchBreeds().then(data => {
  // console.log(data)
  data.forEach(el => {
    breedsList += `<option value="${el.id}">${el.name}-${el.id}</option>`;
  });
  selectEl.insertAdjacentHTML('afterbegin', breedsList);
});

const fetchCat = (e) => {
  console.log(e.target.value);
  fetchCatByBreed().then(data => {
    data.forEach(e => {
      nameCat += `<p>"${e.id}"</p>`;
    })
  });
  infoEl.insertAdjacentHTML('afterbegin', nameCat)
};
  
selectEl.addEventListener('change', fetchCat);
