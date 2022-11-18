import tmdb from './instance';

const apiKey = import.meta.env.VITE_TMDB_APIKEY;

/**
 * 함수 기능
 */
function getPopularMovie() {
  return tmdb.get(`popular?api_key=${apiKey}&language=ko-KR`);
}

const movieApi = { getPopularMovie };

export default movieApi;
