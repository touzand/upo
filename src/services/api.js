  export const API_ENDPOINT = `https://api.themoviedb.org/3`,
   API_KEY = `8e78295ff9a0d66c6596e756caa8add1`;

export const api = {  
  TRENDING_MOVIE:`${API_ENDPOINT}/trending/movie/day?api_key=${API_KEY}`,
  TRENDING_TV:`${API_ENDPOINT}/trending/tv/day?api_key=${API_KEY}`,
  MOVIE_POPULAR_LIST: `${API_ENDPOINT}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  TV_POPULAR_LIST:`${API_ENDPOINT}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  BACKDROP_PATH:`https://image.tmdb.org/t/p/w500`,
  POSTER:`https://image.tmdb.org/t/p/w500`,
}
