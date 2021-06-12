import { read } from './httpServices';

export async function apiGetAllCities() {
  const allCities = await read('/cities');
  return allCities.sort((a, b) => {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  });
}

export async function apiGetAllVotes(cityID) {
  const AllVotes = await read(`election?cityId=${cityID}`);
  return AllVotes.sort((a, b) => {
    return a.votes > b.votes ? -1 : a.votes < b.votes ? 1 : 0;
  });
}

export async function apiGetCandidates() {
  const allCandidates = await read('candidates');
  return allCandidates;
}
