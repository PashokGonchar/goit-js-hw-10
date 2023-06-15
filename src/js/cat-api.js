const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_LRO7hxKh7OtAizcFavrKplaoyu93uuq3cRNTCS2bMfExkivtkUKGqWCIpgo6F6Hp';

export const fetchBreeds = () =>
  fetch(`${BASE_URL}/breeds`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });

export const fetchCatByBreed = breedId =>
  fetch(
    `${BASE_URL}/images/search?breeds_id=${breedId}&api_key=${API_KEY}, `
  ).then(result => {
    if (!result.ok) {
      throw new Error(result.status);
    }

    return result.json();
  });
