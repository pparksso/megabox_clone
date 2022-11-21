import tmdb from './instance';

const apiKey = import.meta.env.VITE_TMDB_APIKEY;

/**
 * 인기있는 영화들의 정보를 불러오는 기능
 */
function getPopularMovie() {
  return tmdb.get(`popular?api_key=${apiKey}&language=ko-KR`);
}

function getDetailMovie(id) {
  return tmdb.get(`${id}?api_key=${apiKey}&language=ko-KR`);
}
const movieApi = { getPopularMovie, getDetailMovie };

export default movieApi;
