import tmdb from "./instance";

/**
 * 함수 기능
 */
function getPopularMovie() {
  const apiKey = import.meta.env.VITE_TMDB_APIKEY;
  return tmdb.get(`popular?api_key=${apiKey}&language=ko-KR`);
}

const movieApi = { getPopularMovie };

export default movieApi;
